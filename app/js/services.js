'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
  .service('searchService', [ '$http', function($http){
    var options = [];
    return {
      movieOptions: function() {
        return options;
      },
      search: function(movieTitle){
        $http.get('http://localhost:3000/searches.json?q=' + movieTitle + '&category=Movie').
          success(function(data){
            options = data;
            console.log(data);
          });
        //options = [
          //{"id":95016,"title":"Die Hard","release_date":"1988-07-15","critics_score":92,"audience_score":94,"critics_consensus":"Its many imitators (and sequels) have never come close to matching the taut thrills of the definitive holiday action classic.","poster_link":"http://content6.flixster.com/movie/11/16/47/11164776_ori.jpg","rating":"R","rt_link":"http://www.rottentomatoes.com/m/die_hard/","filmetric":-2},
          //{"id":112864,"title":"Die Hard 3: With a Vengeance","release_date":"1995-05-19","critics_score":51,"audience_score":84,"critics_consensus":null,"poster_link":"http://content9.flixster.com/movie/11/16/48/11164823_ori.jpg","rating":"R","rt_link":"http://www.rottentomatoes.com/m/die_hard_3_with_a_vengeance/","filmetric":-33},
          //{"id":337978,"title":"Live Free or Die Hard","release_date":"2007-06-27","critics_score":81,"audience_score":86,"critics_consensus":"Live Free or Die Hard may be preposterous, but it's an efficient, action-packed summer popcorn flick with thrilling stunts and a commanding performance by Bruce Willis. Fans of the previous Die Hard films will not be disappointed.","poster_link":"http://content8.flixster.com/movie/10/93/34/10933482_ori.jpg","rating":"PG-13","rt_link":"http://www.rottentomatoes.com/m/live_free_or_die_hard/","filmetric":-5}
        //];
      }
    };
  }]);
