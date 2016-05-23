'use strict';

/**
 * Module dependencies.
 */
var experiencePolicy = require('../policies/experience.server.policy'),
  experience = require('../controllers/experience.server.controller');

module.exports = function (app) {
  // experiences collection routes
  app.route('/api/experience').all(experiencePolicy.isAllowed)
    .get(experience.list)
    .post(experience.create);
    
  // Single experience routes
  app.route('/api/experience/:experienceId').all(experiencePolicy.isAllowed)
    .get(experience.read)
    .put(experience.update)
    .delete(experience.delete);

  // Finish by binding the experience middleware
  app.param('experienceId', experience.experienceByID);


};
