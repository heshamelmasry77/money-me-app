module.exports = {
  template: require('../views/top-bitcoin-mining.html'),
  controller: TopBitCoinMiningController
};

/** @ngInject */
function TopBitCoinMiningController() {
  var vm = this;
  vm.someData = ' hesham beh beh ';
}
