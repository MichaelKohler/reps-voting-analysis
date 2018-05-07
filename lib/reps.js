'use strict';

const debug = require('debug')('Reps');
const StorageHandler = require('./storage-handler');
const storageHandler = new StorageHandler('./reps.json');

class Reps {
  static getAll() {
    return storageHandler.getStorageItem('reps');
  }

  static getByName(name) {
    const allReps = Reps.getAll();
    return allReps.find((rep) => {
      const fullNameNormal = `${rep.first_name} ${rep.last_name}`;
      const fullNameReversed = `${rep.last_name} ${rep.first_name}`;
      return fullNameNormal === name || fullNameReversed === name;
    });
  }
}

module.exports = Reps;
