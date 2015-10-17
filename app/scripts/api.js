/**
 * Created by Slavi on 16.10.2015 г..
 */

'use strict';

define([
  'angular'
], function(betit) {
  betit.module('betit.api',[])
    .factory('addresses', function($http, $q){
      function getData(data) {
        var deferred = $q.defer();
        var url = '../db/storage.json';

        $http({
          method: 'GET',
          url : url,
          cache: true
        })
          .success(function (result, status, headers, config) {
            deferred.resolve(result);
          })
          .error(function (result, status, headers, config) {
            deferred.reject(status);
            handleError(result, status, headers, config);
          });
        return deferred.promise;
      }
      return {
        list: getData
      };
    });
});
