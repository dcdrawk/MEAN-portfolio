'use strict';

/**
 * Module dependencies.
 */
var contactPolicy = require('../policies/contact.server.policy'),
  contact = require('../controllers/contact.server.controller');

module.exports = function (app) {
  // contacts collection routes
  app.route('/api/contact').all(contactPolicy.isAllowed)
    .get(contact.list)
    .post(contact.create);
    
  // Single contact routes
  app.route('/api/contact/:contactId').all(contactPolicy.isAllowed)
    .get(contact.read)
    .put(contact.update)
    .delete(contact.delete);

  // Finish by binding the contact middleware
  app.param('contactId', contact.contactByID);


};
