'use strict';

angular.module('pwSwitchDocs')
  .controller('PwSwitchDocsCtrl', function ($scope) {
    var vm = this;
    vm.switch1Value = 'ACTIVE';
    vm.switch2Value = 'DEACTIVATED';
    vm.switch3Value = true;
  });
