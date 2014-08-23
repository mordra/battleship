'use strict';

/**
 * @ngdoc function
 * @name battleshipApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the battleshipApp
 */
angular.module('battleshipApp')
    .controller('MainCtrl', function ($scope, $firebase) {
        var sync = $firebase(new Firebase('https://glowing-fire-6509.firebaseio.com/messages/archive'));
        $scope.messages = sync.$asArray();
        $scope.send = function (name, text) {
            $scope.messages.$add({name: name, text: text});
            $scope.text = '';
        };
    });
