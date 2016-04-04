'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  About = mongoose.model('About'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a about item
 */
exports.create = function (req, res) {
  var about = new About(req.body);
  about.user = req.user;

  about.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(about);
    }
  });
};

/**
 * Show the current about
 */
exports.read = function (req, res) {
  res.json(req.about);
};

/**
 * Update a about item
 */
exports.update = function (req, res) {
  var about = req.about;

  about.position = req.body.position;
  about.date = req.body.date;
  about.company = req.body.company;
  about.role = req.body.role;
  about.result = req.body.result;
  about.order = req.body.order;
  about.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(about);
    }
  });
};

/**
 * Delete a about item
 */
exports.delete = function (req, res) {
  var about = req.about;

  about.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(about);
    }
  });
};

/**
 * List of about Items
 */
exports.list = function (req, res) {
  About.find().sort('-created').populate('user', 'displayName').exec(function (err, items) {
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
exports.aboutByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'about item id is invalid'
    });
  }

  About.findById(id).populate('user', 'displayName').exec(function (err, item) {
    if (err) {
      return next(err);
    } else if (!item) {
      return res.status(404).send({
        message: 'No about with that identifier has been found'
      });
    }
    req.about = item;
    next();
  });
};
