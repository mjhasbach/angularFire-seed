'use strict';

/* Directives */

angular.module('myApp.directives', [])
    .directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }])
    .directive('angularVersion', ['angularversion', function(angularversion) {
        return function(scope, elm, attrs) {
            elm.text(angularversion);
        };
    }]);