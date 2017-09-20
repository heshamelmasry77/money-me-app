module.exports = {
  template: require('../views/weekly-payouts.html'),
  controller: WeeklyPayoutsController
};

/** @ngInject */
function WeeklyPayoutsController() {
  var vm = this;
  vm.someData = 'test1';
}
