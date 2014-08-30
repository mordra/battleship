'use strict';

/**
 * @ngdoc function
 * @name battleshipApp.controller:BattleCtrl
 * @description
 * # BattleCtrl
 * Controller of the battleshipApp
 */
angular.module('battleshipApp')
    .controller('BattleCtrl', function ($scope, $firebase, $cookieStore, CurrentGame) {
        var sync = $firebase(new Firebase('https://glowing-fire-6509.firebaseio.com/games'));
        var gameKey = $cookieStore.get('battleship_currentGameKey');
        var ref = $firebase(new Firebase('https://glowing-fire-6509.firebaseio.com/games/'+gameKey));
        $scope.player = $cookieStore.get('battleship_currentPlayer');
        $scope.game = ref.$asObject();

        $scope.placeShip = function(ship) {
            $scope.placingShip = ship;
            $scope.gameState = "Currently placing your " + ship.name;
        };

        $scope.gameState = "Welcome to battleship, please place your ships.";

        $scope.clickCell = function (cell) {
            if (!$scope.placingShip) {
                $scope.gameState = "Please select a ship to place!!!!!!!!!";
                return;
            }

            if (cell.x + $scope.placingShip.size >= CurrentGame.GRID_SIZE) {
                $scope.gameState = "Please place your ship within the game boundaries.";
            } else {
                var ship = $scope.placingShip;
                for (var i=0; i<ship.size; i++) {
                    ship.coords[i] = {x: cell.x+i, y:cell.y};
                }
                ref.$update($scope.player, angular.copy($scope.game[$scope.player]));
            }
        }
    });