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
    };
  }

  getAllInfo() {
    return storageHandler.getStorageItem('analysis');
  }

  async processStaticInformation() {
    debug('Processing static information..');
    this.info.totalElegible = this.reps.length - this.config.newRepsJoinedAfterVoting + this.config.repsMovedToAlumniAfterVoting;
    this.info.maxVotesPerCandidates = this.config.totalVoters * this.config.nominees.length;
    this.info.totalVideoViews = this.config.nominees.reduce((videoCount, nominee) => {
      return videoCount + nominee.videoViews;
    }, 0);

    this.info.nominees.map((nominee) => {
      nominee.ratioOfTotalPossibleVotes = nominee.votes / this.info.maxVotesPerCandidates;
    });
  }

  async processVoters() {
    debug('Analysis voters..');
    const votingInfoFetcher = new VotingInfoFetcher(this.config.votingResultsFilePath);
    const votingInfo = await votingInfoFetcher.process();
    debug('Done fetching info from voting page..', votingInfo);
    return Promise.resolve();
  }

  async analyze() {
    this.processStaticInformation();
    await this.processVoters();
    debug('Final analysis done..', this.info);
  }
}

module.exports = VotingAnalysis;
