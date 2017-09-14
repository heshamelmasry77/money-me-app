var angular = require('angular');

var details = require('./details');
require('./details_styles.scss');

var detailsModule = 'details';

module.exports = detailsModule;

angular
  .module(detailsModule, [])
  .component('fountainDetails', details);
