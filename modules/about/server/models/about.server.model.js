'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var AboutSchema = new Schema({
  intro: {
    type: String,
    default: '',
    trim: true
  },
  softwareSkills: {
    type: Array,
    default: [],
    trim: true
  },
  designSkills: {
    type: Array,
    default: [],
    trim: true
  },
  multiMediaSkills: {
    type: Array,
    default: [],
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('About', AboutSchema);