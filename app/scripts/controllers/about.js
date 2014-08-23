'use strict';

/**
 * @ngdoc function
 * @name battleshipApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the battleshipApp
 */
angular.module('battleshipApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
