var angular = require('angular');

var auth = require('./auth');
require('./auth_styles.scss');

var authModule = 'auth';

module.exports = authModule;

angular
  .module(authModule, [])
  .component('fountainAuth', auth);
