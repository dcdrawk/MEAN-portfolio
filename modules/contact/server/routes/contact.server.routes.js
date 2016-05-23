'use strict';

/**
 * Module dependencies.
 */
var contactPolicy = require('../policies/contact.server.policy'),
  contact = require('../controllers/contact.server.controller'),
  message = require('../controllers/contact.email.server.controller');

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
  
  // contacts send message
//  app.route('/api/contact/sendmessage').all().post(contact.sendMessage);
  console.log(contact);
// Single contact routes
//  app.route('/api/message').all()
//    .post(message.sendMessage);
  app.route('/api/contact-form').post(message.sendMail);
  // Finish by binding the contact middleware
  app.param('contactId', contact.contactByID);


};
