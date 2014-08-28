'use strict';

/**
 * @ngdoc function
 * @name battleshipApp.controller:BattleCtrl
 * @description
 * # BattleCtrl
 * Controller of the battleshipApp
 */
angular.module('battleshipApp')
    .controller('BattleCtrl', function ($scope, $firebase) {
        var sync = $firebase(new Firebase('https://glowing-fire-6509.firebaseio.com/games'));
        $scope.playerGrid = [1,2,3,4,5,6,7,8];

        $scope.ready = (function()
        {
            $("td").bind("click", function(){
              alert( $(this).text() );
              // background changes to red
              $(this).addClass("clicked");
          });
        });
    });