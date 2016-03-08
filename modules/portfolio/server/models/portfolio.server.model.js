'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var PortfolioSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  subtitle: {
    type: String,
    default: '',
    trim: true,
    required: 'Subtitle cannot be blank'
  },
  date: {
    type: String,
    default: '',
    trime: true
  },
  content: {
    type: String,
    default: '',
    trim: true
  },
  youtubeLink: {
    type: String,
    default: '',
    trim: true
  },
  tags: {
    type: Array,
    default: [],
    trim: true
  },
  roles: {
    type: Array,
    default: [],
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Portfolio', PortfolioSchema);
