module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('app', {
    url: '/',
    component: 'app'
  })
  .state('techs', {
    url: '/techs',
    component: 'fountainTechs'
  })
  .state('auth', {
    url: '/auth',
    component: 'fountainAuth'
  })
  .state('topBitcoinMining', {
    url: '/top-bitcoin-mining',
    component: 'fountainTopBitcoinMining'
  });
}
