'use strict';

/**
 * @ngdoc overview
 * @name battleshipApp
 * @description
 * # battleshipApp
 *
 * Main module of the application.
 */
angular
    .module('battleshipApp', [
        'ngCookies',
        'ngResource',
        'ngRoute',
        'firebase'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/newgame', {
              templateUrl: 'views/newgame.html',
              controller: 'NewgameCtrl'
            })
            .when('/battle', {
                templateUrl: 'views/battle.html',
                controller: 'BattleCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .run(function () {

    });
