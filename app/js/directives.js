'use strict';

/* Directives */


angular.module('myApp.directives', [])
  .directive('addMovieForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/add-movie-form.html'
    }
  })
  .directive('movieList', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/movie-list.html'
    }
  })
  .directive('discoverForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/discover-form.html'
    }
  })
  .directive('a', function(){
    return {
      restrict: 'E',
      link: function(scope, elem, attrs) {
        if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
          elem.on('click', function(e){
              e.preventDefault();
          });
        }
      }
     }
  });
