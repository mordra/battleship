'use strict';

/**
 * @ngdoc function
 * @name battleshipApp.controller:NewgameCtrl
 * @description
 * # NewgameCtrl
 * Controller of the battleshipApp
 */
angular.module('battleshipApp')
    .controller('NewgameCtrl', function ($scope, $firebase, $location, CurrentGame, $cookieStore) {
        var sync = $firebase(new Firebase('https://glowing-fire-6509.firebaseio.com/games'));

        $scope.games = sync.$asArray();
        $scope.newgame = function(name) {
            var ships = [];
            ships.push({name:'speedboat', size:2, health:2, coords:{state:'none'}});
            ships.push({name:'gun boat', size:3, health:3, coords:{state:'none'}});
            ships.push({name:'destroyer', size:4, health:4, coords:{state:'none'}});
            ships.push({name:'battleship', size:5, health:5, coords:{state:'none'}});

            var grid = {};
            for (var row = 0; row<=CurrentGame.GRID_SIZE; row++) {
                grid[row] = {};
                for ( var col = 0; col<= CurrentGame.GRID_SIZE; col++) {
                    grid[row][col] = {y:row,x:col};
                }
            }

            $scope.games.$add({
                name:name,
                created:Date.now(),
                winner:null,
                playerOne:{
                    ships:ships
                },
                p2:{
                    ships:ships
                },
                grid: grid
            });
        };

        $scope.formatDate = function(date) {
            return (new Date(date)).toLocaleString();
        };

        $scope.delete = function(game) {
            $scope.games.$remove(game);
        };

        $scope.join = function(game) {
            CurrentGame.setGame(game);
            $cookieStore.put('battleship_currentGameKey', $scope.games.$keyAt(game));
            $cookieStore.put('battleship_currentPlayer', 'playerOne');
            $location.path("/battle");
        }
    });
