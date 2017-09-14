var angular = require('angular');

var techsModule = require('./app/modules/techs/index');
var authModule = require('./app/modules/auth/index');
var detailsModule = require('./app/modules/details/index');
require('angular-ui-router');
var routesConfig = require('./routes');

var main = require('./app/modules/main/main');
var header = require('./app/components/header');
var title = require('./app/components/title');
var footer = require('./app/components/footer');

require('./index.scss');

angular
  .module('app', [techsModule, authModule, detailsModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);
