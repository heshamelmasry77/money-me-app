module.exports = {
  template: require('./details.html'),
  controller: DetailsController
};

/** @ngInject */
function DetailsController() {
  var vm = this;
  vm.someData = 'hesham';
}
