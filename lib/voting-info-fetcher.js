'use strict';

const debug = require('debug')('VotingInfoFetcher');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

class VotingInfoFetcher {
  constructor(pathToFile) {
    this.pathToFile = pathToFile;
  }

  async process() {
    debug('Fetching info from voting file..', this.pathToFile);
    const votes = await this.getVotes();
    debug('Processed votes!');
    return votes;
  }

  async getVotes() {
    const votingCommentsObj = await this.getAllVotingComments();
    const votingComments = Array.from(votingCommentsObj);
    const votes = this.getVotesFromComments(votingComments);
    return votes;
  }

  async getAllVotingComments() {
    debug('Reading DOM from..', this.pathToFile);
    const dom = await JSDOM.fromFile(this.pathToFile, {});
    const document = dom.window.document;
    return document.querySelectorAll('.report-comment');
  }

  getVotesFromComments(comments) {
    return comments.map((commentNode) => {
      return {
        voter: this.getVoterFromComment(commentNode),
        time: this.getTimeFromComment(commentNode),
      }
    }).filter((vote) => {
      return !!vote.voter;
    });
  }

  getVoterFromComment(commentNode) {
    const nameNode = commentNode.querySelector('strong');
    const name = nameNode && nameNode.textContent;
    return name;
  }

  getTimeFromComment(commentNode) {
    const span = commentNode.querySelector('span[data-time]');
    const votingTimeUTC = new Date(span.dataset.time);
    return votingTimeUTC;
  }
}

module.exports = VotingInfoFetcher;
