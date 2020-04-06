'use strict';

const debug = require('debug')('VotingAnalysis');
const moment = require('moment');
const StorageHandler = require('./storage-handler');
const storageHandler = new StorageHandler('./voting_analysis.json');
const Reps = require('./reps');
const VotingInfoFetcher = require('./voting-info-fetcher');

class VotingAnalysis {
  constructor(config) {
    this.config = config;
    this.reps = Reps.getAll();
    this.info = {
      year: config.year,
      election: config.election,
      totalVoters: config.static.totalVoters,
      nominees: config.static.nominees,
      joinedInfo: {
        '3': { total: 0, voted: 0 },
        '6': { total: 0, voted: 0 },
        '12': { total: 0, voted: 0 },
        '24': { total: 0, voted: 0 },
        '48': { total: 0, voted: 0 },
        'older': { total: 0, voted: 0 },
      },
      votedPerDate: {},
    };
    this.votingInfoFetcher = new VotingInfoFetcher(this.config.votingResultsFilePath, this.config.type);
  }

  getAllInfo() {
    return storageHandler.getStorageItem('analysis');
  }

  async processStaticInformation() {
    debug('Processing static information..');
    this.info.maxVotesPerCandidates = this.config.static.totalVoters * this.config.static.nominees.length;
    this.info.totalVideoViews = this.config.static.nominees.reduce((videoCount, nominee) => {
      return videoCount + nominee.videoViews;
    }, 0);

    this.info.nominees.map((nominee) => {
      nominee.ratioOfTotalPossibleVotes = nominee.votes / this.info.maxVotesPerCandidates;
    });
  }

  getEligibleVotersInformation() {
    debug('Getting information for eligible voters..');
    this.info.totalEligible = this.reps.length - this.config.static.newRepsJoinedAfterVoting + this.config.static.repsMovedToAlumniAfterVoting;
    this.info.totalVotersRatio = this.info.totalVoters / this.info.totalEligible;

    this.info.countryInfo = this.reps.reduce((countries, rep) => {
      const repCountry = rep.profile.country;

      if (!countries[repCountry]) {
        countries[repCountry] = {
          total: 0,
          voted: 0,
        };
      }

      countries[repCountry].total = countries[repCountry].total + 1;
      return countries;
    }, {});

    this.info.joinedInfo = this.reps.reduce((joinedInfo, rep) => {
      const dateJoined = new Date(rep.profile.date_joined_program);
      const bucket = this.getBucketForDateJoined(dateJoined);
      joinedInfo[bucket].total = joinedInfo[bucket].total + 1;
      return joinedInfo;
    }, this.info.joinedInfo);
  }

  async processVoters() {
    const votingInfo = await this.votingInfoFetcher.process();
    debug('Analysis voters..', votingInfo.length);

    if (votingInfo.length !== this.config.static.totalVoters) {
      throw new Error('TOTAL_DOES_NOT_MATCH_NUMBER_OF_COMMENTS');
    }

    debug('Done fetching info from voting page..', votingInfo);
    this.mapVotersToBuckets(votingInfo);
  }

  mapVotersToBuckets(votingInfo) {
    votingInfo.map((vote) => {
      this.addVotingDate(vote);

      const voterProfile = Reps.getByName(vote.voter);

      if (!voterProfile) {
        return;
      }

      const country = voterProfile.profile.country;
      const countryInfo = this.info.countryInfo[country];
      countryInfo.voted = countryInfo.voted + 1;

      const dateJoined = new Date(voterProfile.profile.date_joined_program);
      const bucket = this.getBucketForDateJoined(dateJoined);
      this.info.joinedInfo[bucket].voted = this.info.joinedInfo[bucket].voted + 1;
    }).filter(Boolean);

    this.calculateRatioForVotingInfo();
  }

  addVotingDate(vote) {
    const formattedVoteDate = moment(vote.time).format("YYYY-MM-DD");

    if (!this.info.votedPerDate[formattedVoteDate]) {
      this.info.votedPerDate[formattedVoteDate] = 1;
      return;
    }

    this.info.votedPerDate[formattedVoteDate] = this.info.votedPerDate[formattedVoteDate] + 1;
  }

  calculateRatioForVotingInfo() {
    Object.keys(this.info.countryInfo).map((country) => {
      const countryEntry = this.info.countryInfo[country];
      countryEntry.ratio = countryEntry.voted / countryEntry.total;
    });

    Object.keys(this.info.joinedInfo).map((bucket) => {
      const bucketEntry = this.info.joinedInfo[bucket];
      bucketEntry.ratio = bucketEntry.voted / bucketEntry.total;
    });
  }

  getBucketForDateJoined(dateJoined) {
    // A bit hacky, but works :)
    const electionDate = new Date(this.config.electionDate);

    const ThreeMonthsAgo = moment(electionDate).subtract(3, 'months');
    if (dateJoined > ThreeMonthsAgo) { return '3'; }

    const SixMonthsAgo = moment(electionDate).subtract(6, 'months');
    if (dateJoined > SixMonthsAgo) { return '6'; }

    const OneYearAgo = moment(electionDate).subtract(1, 'year');
    if (dateJoined > OneYearAgo) { return '12'; }

    const TwoYearsAgo = moment(electionDate).subtract(2, 'years');
    if (dateJoined > TwoYearsAgo) { return '24'; }

    const FourYearsAgo = moment(electionDate).subtract(4, 'years');
    if (dateJoined > FourYearsAgo) { return '48'; }

    return 'older';
  }

  async analyze() {
    this.processStaticInformation();
    this.getEligibleVotersInformation();
    await this.processVoters();
    const storageKey = `${this.config.year}-${this.config.election}`;
    storageHandler.saveStorageItem(storageKey, this.info);
    debug('Final analysis done..', storageKey, this.info);
  }

  async getNotVoted() {
    debug('Getting Reps who should be reminded...');
    const votes = await this.votingInfoFetcher.getVotes();
    debug(`${votes.length} votes so far..`);
    const reps = this.reps.slice();
    votes.forEach((vote) => {
      const voter = reps.find((rep) => `${rep.first_name} ${rep.last_name}` === vote.voter);
      const index = reps.indexOf(voter);
      if (index >= 0) {
        reps.splice(index, 1);
      }
    });

    debug(`${reps.length} Reps who haven't voted found..`);

    return reps;
  }
}

module.exports = VotingAnalysis;
