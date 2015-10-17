/**
 * Created by Slavi on 16.10.2015 г..
 */

'use strict';

define([
  'angular',
  'angularRoute'
], function(betit) {
  betit.module('betit.homepage', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '../../views/homepage/homepage.html',
          controller: 'homeCtrl'
        });
    }])
    .controller('homeCtrl', ['$scope', 'addresses', '$route', '$templateCache', function($scope, addresses, $route, $templateCache) {
			addresses.list()
				.then(function(data) {

					$scope.results = data;

            $scope.address = (localStorage.getItem('address')!==null) ? JSON.parse(localStorage.getItem('address')) : $scope.results;

            $scope.delete = function($index) {
              $scope.address.splice($index,1);
              localStorage.setItem('address', JSON.stringify($scope.address));
            }

				});
    }]);
});
