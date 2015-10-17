/*global require*/
'use strict';

require.config({
    shim: {
      'angular' : {'exports' : 'angular'},
      'angularRoute': ['angular'],
      'angularMocks': {
        deps:['angular'],
        'exports':'angular.mock'
      },
      'angularAnimate': {
        deps:['angular']
      },
      'angularLocale': {
        deps:['angular']
      },
        underscore: {
            exports: '_'
        },
      priority: [
        "angular"
      ],
      baseUrl: '/'
    },
    paths: {
        'angular': '../bower_components/angular/angular',
        'angularRoute': '../bower_components/angular-route/angular-route',
        'angularMocks': '../bower_components/angular-mocks/angular-mocks',
        'angularAnimate': '../bower_components/angular-animate/angular-animate',
        'angularLocale': '../bower_components/angular-i18n/angular-locale_bg-bg',
        'text': '../bower_components/requirejs-text/text',
        'jquery': '../bower_components/jquery/jquery',
        'underscore': '../bower_components/underscore/underscore'

    }
});

require([
      'angular',
      'app'
    ], function(angular, app) {
      var $html = angular.element(document.getElementsByTagName('html')[0]);
      angular.element().ready(function() {
        // bootstrap the app manually
        angular.bootstrap(document, ['betit']);
      });
    }
);
