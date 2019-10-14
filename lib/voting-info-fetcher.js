'use strict';

const debug = require('debug')('VotingInfoFetcher');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const REMINDER_CONFIG_TYPE = 'reminder';

class VotingInfoFetcher {
  constructor(pathToFile, type) {
    this.pathToFile = pathToFile;
    this.type = type;
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

    if (this.type === REMINDER_CONFIG_TYPE) {
      const reportComments = document.querySelectorAll('.report-comment');
      return reportComments;
    }

    const votingComments = document.querySelectorAll('.voting-comment');
    return votingComments;
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
    if (this.type === REMINDER_CONFIG_TYPE) {
      const nameNode = commentNode.querySelector('strong');
      const name = nameNode && nameNode.textContent;
      return name;
    }

    const fullComment = commentNode.lastChild.nodeValue;

    if (!/voted successfully/.test(fullComment)) {
      return;
    }

    const voterWithoutFormatting = fullComment
      .replace(/\*\*/g, '')
      .replace(/\n\s*/g, '')
      .replace(/\svoted successfully.*/, '');
    return voterWithoutFormatting;
  }

  getTimeFromComment(commentNode) {
    const span = commentNode.querySelector('span[data-time]');
    const votingTimeUTC = new Date(span.dataset.time);
    return votingTimeUTC;
  }
}

module.exports = VotingInfoFetcher;
