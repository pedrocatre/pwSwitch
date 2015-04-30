'use strict';

angular.module('pwSwitchDocs')
  .controller('PwSwitchDocsCtrl', function () {
    var vm = this;
    vm.switch1Value = 'ACTIVE';
    vm.switch2Value = 'DEACTIVATED';
    vm.switch4Value = 'ACTIVE';
    vm.switch3Value = true;

    vm.switch5Value = 'ACTIVE';
    vm.switch6Value = 'DEACTIVATED';
    vm.switch7Value = 'ACTIVE';

    vm.switch8Value = 'ACTIVE';
    vm.switch8Enabled = false;

    vm.toggleEnableSwitch = function () {
      vm.switch8Enabled = !vm.switch8Enabled;
    };
  });
