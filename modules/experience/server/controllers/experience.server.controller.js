'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Experience = mongoose.model('Experience'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a experience item
 */
exports.create = function (req, res) {
  var experience = new Experience(req.body);
  experience.user = req.user;

  experience.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(experience);
    }
  });
};

/**
 * Show the current experience
 */
exports.read = function (req, res) {
  res.json(req.experience);
};

/**
 * Update a experience item
 */
exports.update = function (req, res) {
  var experience = req.experience;

  experience.position = req.body.position;
  experience.date = req.body.date;
  experience.company = req.body.company;
  experience.role = req.body.role;
  experience.result = req.body.result;
  experience.order = req.body.order;
  experience.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(experience);
    }
  });
};

/**
 * Delete a experience item
 */
exports.delete = function (req, res) {
  var experience = req.experience;

  experience.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(experience);
    }
  });
};

/**
 * List of Experience Items
 */
exports.list = function (req, res) {
  Experience.find().sort('-created').populate('user', 'displayName').exec(function (err, items) {
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
exports.experienceByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Experience item id is invalid'
    });
  }

  Experience.findById(id).populate('user', 'displayName').exec(function (err, item) {
    if (err) {
      return next(err);
    } else if (!item) {
      return res.status(404).send({
        message: 'No experience with that identifier has been found'
      });
    }
    req.experience = item;
    next();
  });
};
