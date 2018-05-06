'use strict';

const debug = require('debug')('Reps');
const StorageHandler = require('./storage-handler');
const storageHandler = new StorageHandler('./reps.json');

class Reps {
  static getAll() {
    return storageHandler.getStorageItem('reps');
  }
}

module.exports = Reps;
