'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ContactSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  email: {
    type: String,
    default: '',
    trim: true,
  },
  phone: {
    type: String,
    default: '',
    trim: true,
  },
  address: {
    type: String,
    default: '',
    trim: true,
  },
  facebook: {
    type: String,
    default: '',
    trim: true,
  },
  linkedIn: {
    type: String,
    default: '',
    trim: true,
  },
  googlePlus: {
    type: String,
    default: '',
    trim: true,
  },
  github: {
    type: String,
    default: '',
    trim: true,
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Contact', ContactSchema);
