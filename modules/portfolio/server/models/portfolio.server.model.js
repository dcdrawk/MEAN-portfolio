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
  type: {
    type: String,
    default: '',
    trim: true,
  },
  date: {
    type: String,
    default: '',
    trime: true
  },
  position: {
    type: String,
    default: '',
    trime: true
  },
  cardImgSrc: {
    type: String,
    default: '',
    trime: true
  },
  picture: {
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
  githubLink: {
    type: String,
    default: '',
    trim: true
  },
  appLink: {
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
