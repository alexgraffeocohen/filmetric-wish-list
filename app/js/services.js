'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
  .service('searchService', [ '$http', '$q', function($http){
    var options = [];
    return {
      movieSearch: function(movieTitle){
        var promise = $http.get('http://localhost:3000/searches.json?q=' + movieTitle + '&category=Movie').
          then(function(response){
            console.log(response);
            return response.data;
          });
        return promise;
      },
      discover: function(evaluationID, genreID){
        var promise = $http.get('http://localhost:3000/movies/discover.json?filmetric_eval=' + evaluationID + '&genre=' + genreID).
          then(function(response){
            console.log(response);
            return response.data;
          });
        return promise;
      }
    };
  }]);
