/**
 * Created by Slavi on 16.10.2015 г..
 */

'use strict';

define([
  'angular',
  'angularRoute',
  'angularAnimate',
  'angularLocale',
  'api',
  'homepage/homepage',
  'admin/add',
  'admin/edit'
], function(angular, angularRoute, angularAnimate){
  return angular.module('betit', [
    'ngRoute',
    'ngAnimate',
    'betit.homepage',
    'betit.add',
    'betit.edit',
    'betit.api'
  ])
    .config(['$routeProvider', function($routeProvider){
      $routeProvider.otherwise({redirectTo: '/'});
    }]);

});
