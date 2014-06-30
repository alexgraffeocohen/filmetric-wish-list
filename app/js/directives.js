'use strict';

/* Directives */


angular.module('myApp.directives', [])
  .directive('addMovieForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/form.html'
    }
  });
