'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Contact = mongoose.model('Contact'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a contact item
 */
exports.create = function (req, res) {
  var contact = new Contact(req.body);
  contact.user = req.user;

  contact.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(contact);
    }
  });
};

/**
 * Show the current contact
 */
exports.read = function (req, res) {
  res.json(req.contact);
};

/**
 * Update a contact item
 */
exports.update = function (req, res) {
  var contact = req.contact;

  contact.email = req.body.email;
  contact.phone = req.body.phone;
  contact.address = req.body.address;
  contact.facebook = req.body.facebook;
  contact.linkedIn = req.body.linkedIn;
  contact.googlePlus = req.body.googlePlus;
  contact.github = req.body.github;

  contact.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(contact);
    }
  });
};

/**
 * Delete a contact item
 */
exports.delete = function (req, res) {
  var contact = req.contact;

  contact.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(contact);
    }
  });
};

/**
 * List of Contact Items
 */
exports.list = function (req, res) {
  Contact.find().sort('-created').populate('user', 'displayName').exec(function (err, items) {
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
exports.contactByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Contact item id is invalid'
    });
  }

  Contact.findById(id).populate('user', 'displayName').exec(function (err, item) {
    if (err) {
      return next(err);
    } else if (!item) {
      return res.status(404).send({
        message: 'No contact with that identifier has been found'
      });
    }
    req.contact = item;
    next();
  });
};
