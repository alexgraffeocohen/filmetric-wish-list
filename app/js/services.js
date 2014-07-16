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
      }
    };
  })
  .service('listService', function(){
    var movies = [
      {
        title: "Her",
        release_date: "2014-01-10",
        critics_score: 94,
        audience_score: 85,
        critics_consensus: "Sweet, soulful, and smart, Spike Jonze's Her uses its just-barely-sci-fi scenario to impart wryly funny wisdom about the state of modern human relationships.",
        poster_link: "http://content9.flixster.com/movie/11/17/28/11172839_ori.jpg",
        rating: "R",
        rt_link: "http://www.rottentomatoes.com/m/her/",
        filmetric: 9
      },

      {
        title: "Gravity",
        release_date: "2013-10-04",
        critics_score: 97,
        audience_score: 84,
        critics_consensus: "Alfonso Cuaron's Gravity is an eerie, tense sci-fi thriller that's masterfully directed and visually stunning.",
        poster_link: "http://content8.flixster.com/movie/11/17/64/11176450_ori.jpg",
        rating: "PG-13",
        rt_link: "http://www.rottentomatoes.com/m/gravity_2013/",
        filmetric: 13
      },

      {
        title: "Children of Men",
        release_date: "2006-12-25",
        critics_score: 93,
        audience_score: 84,
        critics_consensus: "Children of Men works on every level: as a violent chase thriller, a fantastical cautionary tale, and a sophisticated human drama about societies struggling to live. This taut and thought-provoking tale may not have the showy special effects normally found in movies of this genre, but you won't care one bit after the story kicks in, about a dystopic future where women can no longer conceive and hope lies within one woman who holds the key to humanity's survival. It will have you riveted.",
        poster_link: "http://content6.flixster.com/movie/27/04/67/2704676_ori.jpg",
        rating: "R",
        rt_link: "http://www.rottentomatoes.com/m/children_of_men/",
        filmetric: 9
      },

      {
        title: "Die Hard",
        release_date: "1998-07-15",
        critics_score: 92,
        audience_score: 94,
        critics_consensus: "Its many imitators (and sequels) have never come close to matching the taut thrills of the definitive holiday action classic.",
        poster_link: "http://content6.flixster.com/movie/11/16/47/11164776_ori.jpg",
        rating: "R",
        rt_link: "http://www.rottentomatoes.com/m/die_hard/",
        filmetric: -2
      },

      {
        title: "Avatar",
        release_date: "2009-12-18",
        critics_score: 83,
        audience_score: 82,
        critics_consensus: "It might be more impressive on a technical level than as a piece of storytelling, but Avatar reaffirms James Cameron's singular gift for imaginative, absorbing filmmaking.",
        poster_link: "http://content7.flixster.com/movie/10/91/12/10911201_ori.jpg",
        rating: "PG-13",
        rt_link: "http://www.rottentomatoes.com/m/avatar/",
        filmetric: 1
      },

      {
        title: "Ghostbusters",
        release_date: "1984-06-01",
        critics_score: 96,
        audience_score: 87,
        critics_consensus: "An infectiously fun blend of special effects and comedy, with Bill Murray's hilarious deadpan performance leading a cast of great comic turns.",
        poster_link: "http://content9.flixster.com/movie/11/16/74/11167403_ori.jpg",
        rating: "PG",
        rt_link: "http://www.rottentomatoes.com/m/ghostbusters/",
        filmetric: 9
      },
    ];
    return {
      getMovies: function(){
        return movies;
      },
      addMovie: function(movie){
        movies.push(movie);
      },
      removeMovie: function(movie){
        var index = movies.indexOf(movie);
        movies.splice(index, 1);
      },
      onWishList: function(movie){
        for(var i=0; i < movies.length; i++){
          if(movies[i] == movie){
            return true;
          }
        };
        return false;
      }
    }
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
