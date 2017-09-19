var angular = require('angular');

var weeklyPayouts = require('./controllers/WeeklyPayoutsController');
require('./styles/weekly_payouts_styles.scss');

var topBitCoinMining = require('./controllers/TopBitCoinMiningController');
require('./styles/top_bitcoin_mining_styles.scss');

var detailsModule = 'details';

module.exports = detailsModule;

angular
  .module(detailsModule, [])
  .component('fountainWeeklyPayouts', weeklyPayouts)
  .component('fountainTopBitCoinMining', topBitCoinMining);
