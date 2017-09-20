var angular = require('angular');

var topBitcoinMining = require('./controllers/TopBitcoinMiningController');
require('./styles/top_bitcoin_mining_styles.scss');

var weeklyPayouts = require('./controllers/WeeklyPayoutsController');
require('./styles/weekly_payouts_styles.scss');

var detailsModule = 'details';

module.exports = detailsModule;

angular
  .module(detailsModule, [])
  .component('fountainTopBitcoinMining', topBitcoinMining)
  .component('fountainWeeklyPayouts', weeklyPayouts);
