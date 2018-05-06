'use strict';

const debug = require('debug')('VotingInfoFetcher');
const {promisify} = require('util');
const fs = require('fs');
const readFileAsync = promisify(fs.readFile);
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

class VotingInfoFetcher {
  constructor(pathToFile) {
    this.pathToFile = pathToFile;
  }

  async process() {
    debug('Fetching info from voting file..', this.pathToFile);
    const votingCommentsObj = await this.getAllVotingComments();
    const votingComments = Array.from(votingCommentsObj);
    const votes = this.getVotesFromComments(votingComments);
    debug('Got votes', votes);
  }

  async getAllVotingComments() {
    debug('Reading DOM..');
    const dom = await JSDOM.fromFile(this.pathToFile, {});
    const document = dom.window.document;
    return document.querySelectorAll('.voting-comment');
  }

  getVotesFromComments(comments) {
    return comments.map((commentNode) => {
      return {
        voter: this.getVoterFromComment(commentNode),
        time: this.getTimeFromComment(commentNode),
      }
    });
  }

  getVoterFromComment(commentNode) {
    const fullComment = commentNode.lastChild.nodeValue;
    const voterWithoutFormatting = fullComment
      .replace(/\*\*/g, '')
      .replace(/\n\s*/g, '')
      .replace(/\svoted successfully./, '');
    return voterWithoutFormatting;
  }

  getTimeFromComment(commentNode) {
    const span = commentNode.querySelector('span[data-time]');
    const votingTimeUTC = new Date(span.dataset.time);
    return votingTimeUTC;
  }
}

module.exports = VotingInfoFetcher;
