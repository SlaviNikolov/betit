/**
 * Created by Slavi on 16.10.2015 г..
 */

'use strict';

define([
  'angular',
  'angularRoute'
], function(betit) {
  betit.module('betit.edit', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
          .when('/edit/:index', {
            templateUrl: '../../views/admin/edit.html',
            controller: 'editCtrl'
          });
    }])
    .controller('editCtrl', ['$scope', '$routeParams', 'addresses', '$location', function($scope, $routeParams, addresses, $location) {

        addresses.list().
            then(function(data){
              $scope.saved = data;

              $scope.address = (localStorage.getItem('address')!==null) ? JSON.parse(localStorage.getItem('address')) : $scope.saved;

              $scope.result = $scope.address[$routeParams.index];

              $scope.save = function() {
                var edited = {
                  "fName": $scope.result.fName,
                  "lName": $scope.result.lName,
                  "email": $scope.result.email,
                  "aDdress": $scope.result.aDdress,
                  "city": $scope.result.city,
                  "zCode": $scope.result.zCode,
                  "country": $scope.result.country
                };

                $scope.address.slice($routeParams.index, 0, edited);
                localStorage.setItem('address', JSON.stringify($scope.address));
                $location.path('/').replace();

              };
            });

    }]);
});
