'use strict';

/**
 * @ngdoc function
 * @name battleshipApp.controller:NewgameCtrl
 * @description
 * # NewgameCtrl
 * Controller of the battleshipApp
 */
angular.module('battleshipApp')
    .controller('NewgameCtrl', function ($scope, $firebase) {
        var sync = $firebase(new Firebase('https://glowing-fire-6509.firebaseio.com/games'));
        $scope.games = sync.$asArray();

        $scope.newgame = function(name) {
            $scope.games.$add({
                name:name,
                playerOne:{},
                p2:{}
            });
        };
    });
