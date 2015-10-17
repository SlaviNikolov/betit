/**
 * Created by Slavi on 16.10.2015 г..
 */

'use strict';

define([
  'angular',
  'angularRoute'
], function(betit) {
  betit.module('betit.add', ['ngRoute'])
      .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/add', {
              templateUrl: '../../views/admin/add.html',
              controller: 'addCtrl'
            });
      }])
      .controller('addCtrl', ['$scope', 'addresses', '$location', function($scope, addresses, $location) {

        addresses.list().
            then(function(data){
              $scope.saved = data;

              $scope.address = (localStorage.getItem('address')!==null) ? JSON.parse(localStorage.getItem('address')) : $scope.saved;

              localStorage.setItem('address', JSON.stringify($scope.address));

              $scope.save = function () {
                var edited = {
                  "fName": $scope.fName,
                  "lName": $scope.lName,
                  "email": $scope.email,
                  "aDdress": $scope.aDdress,
                  "city": $scope.city,
                  "zCode": $scope.zCode,
                  "country": $scope.country
                };
                if($scope.add.$valid){
                  $scope.address.push(edited);
                  localStorage.setItem('address', JSON.stringify($scope.address));
                  $location.path('/').replace();
                }
                else{
                  angular.forEach($scope.add.$error.required, function(field) {
                    field.$setDirty();
                  });
                }

              };
            });

      }]);
});
