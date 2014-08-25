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
            var ships = [];
            ships.push({name:'speedboat', size:2});
            ships.push({name:'gun boat', size:3});
            ships.push({name:'destroyer', size:4});
            ships.push({name:'battleship', size:5});

            $scope.games.$add({
                name:name,
                created:Date.now(),
                winner:null,
                playerOne:{
                    ships:ships
                },
                p2:{
                    ships:ships
                }
            });
        };

        $scope.formatDate = function(date) {
            return (new Date(date)).toLocaleString();
        }
    });
