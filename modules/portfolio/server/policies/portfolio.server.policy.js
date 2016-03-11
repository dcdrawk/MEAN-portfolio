'use strict';

/**
 * Module dependencies.
 */
var acl = require('acl');

// Using the memory backend
acl = new acl(new acl.memoryBackend());

/**
 * Invoke Portfolio Permissions
 */
exports.invokeRolesPolicies = function () {
  acl.allow([{
    roles: ['admin'],
    allows: [{
      resources: '/api/portfolio',
      permissions: '*'
    }, {
      resources: '/api/portfolio/:portfolioId',
      permissions: '*'
    }]
  }, {
    roles: ['user'],
    allows: [{
      resources: '/api/portfolio',
      permissions: ['get', 'post']
    }, {
      resources: '/api/portfolio/:portfolioId',
      permissions: ['get']
    }]
  }, {
    roles: ['guest'],
    allows: [{
      resources: '/api/portfolio',
      permissions: ['get']
    }, {
      resources: '/api/portfolio/:portfolioId',
      permissions: ['get']
    }]
  }]);
  acl.allow([{
    roles: ['admin', 'user', 'guest'],
    allows: [{
      resources: '/api/portfolio/typelist',
      permissions: 'get'
    }]
  }]);
};

/**
 * Check If Portfolios Policy Allows
 */
exports.isAllowed = function (req, res, next) {
  var roles = (req.user) ? req.user.roles : ['guest'];

  // If an article is being processed and the current user created it then allow any manipulation
  if (req.portfolio && req.user && req.portfolio.user.id === req.user.id) {
    return next();
  }

  // Check for user roles
  acl.areAnyRolesAllowed(roles, req.route.path, req.method.toLowerCase(), function (err, isAllowed) {
    if (err) {
      // An authorization error occurred.
      return res.status(500).send('Unexpected authorization error');
    } else {
      if (isAllowed) {
        // Access granted! Invoke next middleware
        return next();
      } else {
        return res.status(403).json({
          message: 'User is not authorized'
        });
      }
    }
  });
};
