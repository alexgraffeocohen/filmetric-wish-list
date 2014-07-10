'use strict';

/* Directives */


angular.module('myApp.directives', [])
  .directive('addMovieForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/form.html'
    }
  })
  .directive('discoverForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/discover-form.html'
    }
  });
