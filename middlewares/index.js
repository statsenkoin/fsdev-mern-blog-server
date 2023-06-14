const validateBody = require('./validateBody');
const checkAuth = require('./checkAuth');
const handleRouteNotFound = require('./handleRouteNotFound');
const handleError = require('./handleError');

module.exports = { validateBody, checkAuth, handleRouteNotFound, handleError };
