'use strict';

var mongoose = require('../mongoose-shim');
var Schema = mongoose.Schema;

var Config = new Schema({
  version: Number
  // is there any other configuration we want?
});

module.exports = mongoose.model('Config', Config);

module.exports.SCHEMA_VERSION = 2;
