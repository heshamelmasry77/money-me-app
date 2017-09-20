module.exports = {
  template: require('../views/top-bitcoin-mining.html'),
  controller: TopBitcoinMiningController
};

/** @ngInject */
function TopBitcoinMiningController() {
  var vm = this;
  vm.someData = 'test2';
}
