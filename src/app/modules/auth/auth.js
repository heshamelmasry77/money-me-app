module.exports = {
  template: require('./auth.html'),
  controller: AuthController
};

/** @ngInject */
function AuthController() {
  var vm = this;
  vm.someData = 'hesham';
}
