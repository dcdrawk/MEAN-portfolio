'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ExperienceSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  position: {
    type: String,
    default: '',
    trim: true,
    required: 'Position cannot be blank'
  },
  date: {
    type: String,
    default: '',
    trim: true,
    required: 'Date cannot be blank'
  },
  company: {
    type: String,
    default: '',
    trim: true,
    required: 'Company cannot be blank'
  },
  role: {
    type: String,
    default: '',
    trim: true,
    required: 'Role cannot be blank'
  },
  result: {
    type: String,
    default: '',
    trim: true,
    required: 'Result cannot be blank'
  },
  order: {
    type: Number,
    default: 0,
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Experience', ExperienceSchema);
