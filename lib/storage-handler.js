'use strict';

const debug = require('debug')('Storage');
const Storage = require('dom-storage');

const DATA_FOLDER = './data/';

class StorageHandler {
  constructor(storagePath) {
    debug('initializing..');

    this.storage = new Storage(DATA_FOLDER + storagePath, { strict: false, ws: '  ' });
  }

  /**
   * Clears the storage
   */
  removeStorageItem(key) {
    debug('removing', key);

    this.storage.removeItem(key);
  }

  /**
   * Saves the data to local storage
   *
   * @param  {String}  key         key to save
   * @param  {Object}  data        data to save
   * @return {Object}              saved item
   */
  saveStorageItem(key, data) {
    this.storage.setItem(key, data);
    debug('finished saving latest data', key);
    return data;
  }

  /**
   * Returns an item from the storage with a given key
   *
   * @param {String} key  key to fetch from storage
   * @return {Object}     object from storage
   */
  getStorageItem(key) {
    return this.storage.getItem(key);
  }
}

module.exports = StorageHandler;
