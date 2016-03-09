'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Portfolio = mongoose.model('Portfolio'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a portfolio item
 */
exports.create = function (req, res) {
  var portfolio = new Portfolio(req.body);
  portfolio.user = req.user;

  portfolio.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(portfolio);
    }
  });
};

/**
 * Show the current portfolio
 */
exports.read = function (req, res) {
  res.json(req.portfolio);
};

/**
 * Update a portfolio item
 */
exports.update = function (req, res) {
  var portfolio = req.portfolio;

  portfolio.title = req.body.title;
  portfolio.content = req.body.content;
  portfolio.subtitle = req.body.subtitle;
  portfolio.date = req.body.date;
  portfolio.position = req.body.position;
  portfolio.tags = req.body.tags;
  portfolio.roles = req.body.roles;
  portfolio.youtubeLink = req.body.youtubeLink;
  portfolio.cardImgSrc = req.body.cardImgSrc;
  portfolio.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(portfolio);
    }
  });
};

/**
 * Delete a portfolio item
 */
exports.delete = function (req, res) {
  var portfolio = req.portfolio;

  portfolio.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(portfolio);
    }
  });
};

/**
 * List of Portfolio Items
 */
exports.list = function (req, res) {
  Portfolio.find().sort('-created').populate('user', 'displayName').exec(function (err, items) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(items);
    }
  });
};

/**
 * Article middleware
 */
exports.portfolioByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Portfolio is invalid'
    });
  }

  Portfolio.findById(id).populate('user', 'displayName').exec(function (err, item) {
    if (err) {
      return next(err);
    } else if (!item) {
      return res.status(404).send({
        message: 'No portfolio with that identifier has been found'
      });
    }
    req.portfolio = item;
    next();
  });
};
