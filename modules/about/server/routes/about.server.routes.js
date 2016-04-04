'use strict';

/**
 * Module dependencies.
 */
var aboutPolicy = require('../policies/about.server.policy'),
  about = require('../controllers/about.server.controller');

module.exports = function (app) {
  // abouts collection routes
  app.route('/api/about').all(aboutPolicy.isAllowed)
    .get(about.list)
    .post(about.create);
    
  // Single about routes
  app.route('/api/about/:aboutId').all(aboutPolicy.isAllowed)
    .get(about.read)
    .put(about.update)
    .delete(about.delete);

  // Finish by binding the about middleware
  app.param('aboutId', about.aboutByID);


};
