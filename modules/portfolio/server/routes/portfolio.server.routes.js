'use strict';

/**
 * Module dependencies.
 */
var portfolioPolicy = require('../policies/portfolio.server.policy'),
  portfolio = require('../controllers/portfolio.server.controller');

module.exports = function (app) {
  // portfolios collection routes
  app.route('/api/portfolio').all(portfolioPolicy.isAllowed)
    .get(portfolio.list)
    .post(portfolio.create);

  // Single portfolio routes
  app.route('/api/portfolio/:portfolioId').all(portfolioPolicy.isAllowed)
    .get(portfolio.read)
    .put(portfolio.update)
    .delete(portfolio.delete);

  // Finish by binding the portfolio middleware
  app.param('portfolioId', portfolio.portfolioByID);
};
