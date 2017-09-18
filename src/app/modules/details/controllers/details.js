module.exports = {
  template: require('../views/details.html'),
  controller: DetailsController
};

/** @ngInject */
function DetailsController() {
  var vm = this;
  vm.someData = 'hesham';
}
