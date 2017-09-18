var angular = require('angular');

var details = require('./controllers/details');
require('./styles/details_styles.scss');

var detailsModule = 'details';

module.exports = detailsModule;

angular
  .module(detailsModule, [])
  .component('fountainDetails', details);
