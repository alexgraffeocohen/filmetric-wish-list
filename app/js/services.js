'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
  .service('clearService', function(){
    var formController;
    var options;
    return {
      setContext: function(controller, scopeOptions){
        formController = controller;
        options = scopeOptions;
      },
      clearAll: function(){
        formController.movieTitle = "";
        formController.actorName = "";
        formController.directorName = "";
        formController.userChoice = {};
        formController.options = [];
        formController.showAdvOptions = false;
        formController.searchSubmitted = false;
        console.log('clearService.clearAll was called!');
      }
    };
  })
  .service('searchService', [ '$http', '$q', function($http){
    var options = [];
    return {
      movieSearch: function(movieTitle, actorName, directorName){
        var query = 'http://localhost:3000/searches.json?q=' + movieTitle + '&category=Movie'
        if(actorName != "" && directorName != ""){
          query = query + '&actor=' + actorName + '&director=' + directorName;
        }else if(actorName != ""){
          query = query + '&actor=' + actorName;
        }else if(directorName != ""){
          query = query + '&director=' +directorName;
        }
        var promise = $http.get(query).
          then(function(response){
            return response.data;
          });
        return promise;
      },
      browse: function(){
        var promise = $http.get('http://localhost:3000/movies/browse.json').
          then(function(response){
            return response.data;
          });
        return promise;
      },
      discover: function(evaluationID, genreID){
        var promise = $http.get('http://localhost:3000/movies/discover.json?filmetric_eval=' + evaluationID + '&genre=' + genreID).
          then(function(response){
            return response.data;
          });
        return promise;
      }
    };
  }]);
