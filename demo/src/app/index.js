'use strict';

//import pwSwitch from '../pwSwitch.js';

angular.module('pwSwitchDocs', ['ui.router', 'ui.bootstrap', 'pwSwitch'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/pwSwitchDocs/pwSwitchDocs.html',
        controller: 'PwSwitchDocsCtrl',
        controllerAs: 'PwSwitchDocs'
      });

    $urlRouterProvider.otherwise('/');
  })
;
