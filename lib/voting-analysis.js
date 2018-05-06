'use strict';

const debug = require('debug')('VotingAnalysis');
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
      totalVoters: config.totalVoters,
      nominees: config.nominees,
      joinedInfo: {
        '3': 0,
        '6': 0,
        '12': 0,
        '24': 0,
        'older': 0,
      },
    };
  }

  getAllInfo() {
    return storageHandler.getStorageItem('analysis');
  }

  async processStaticInformation() {
    debug('Processing static information..');
    this.info.maxVotesPerCandidates = this.config.totalVoters * this.config.nominees.length;
    this.info.totalVideoViews = this.config.nominees.reduce((videoCount, nominee) => {
      return videoCount + nominee.videoViews;
    }, 0);

    this.info.nominees.map((nominee) => {
      nominee.ratioOfTotalPossibleVotes = nominee.votes / this.info.maxVotesPerCandidates;
    });
  }

  getElegibleVotersInformation() {
    debug('Getting information for elegible voters..');
    this.info.totalElegible = this.reps.length - this.config.newRepsJoinedAfterVoting + this.config.repsMovedToAlumniAfterVoting;
    this.info.totalVotersRatio = this.info.totalVoters / this.info.totalElegible;

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
  }

  async processVoters() {
    debug('Analysis voters..');
    const votingInfoFetcher = new VotingInfoFetcher(this.config.votingResultsFilePath);
    const votingInfo = await votingInfoFetcher.process();

    if (votingInfo.length !== this.config.totalVoters) {
      throw new Error('TOTAL_DOES_NOT_MATCH_NUMBER_OF_COMMENTS');
    }

    debug('Done fetching info from voting page..', votingInfo);
  }

  async analyze() {
    this.processStaticInformation();
    this.getElegibleVotersInformation();
    await this.processVoters();
    storageHandler.saveStorageItem('analysis', this.info);
    debug('Final analysis done..', this.info);
  }
}

module.exports = VotingAnalysis;
