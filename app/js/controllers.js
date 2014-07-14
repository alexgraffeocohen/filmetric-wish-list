'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('WishListController', function(){
    this.movies = movies;
    this.showForm = false;
  })
  .controller('SearchMovieCtrl', [ 'searchService', '$scope', function(searchService, $scope){
    this.searchSubmitted = false;
    this.movieTitle = "";
    this.search = function(form){
      searchService.search(this.movieTitle).then(function(movies){
        $scope.options = movies;
      });
      form.$setPristine();
      this.movieTitle = "";
    };
    this.selectOption = function(option){
      this.userChoice = option;
    };
    this.addToList = function(movie, list){
     list.push(movie);
    }
  }])
  .controller('DiscoverController', [ 'searchService', '$scope', function(searchService, $scope){
    $scope.options = movies;
    this.genres = [
      {name: 'Action', filmetric: 2},
      {name: 'Romance', filmetric: 4},
      {name: 'Mystery', filmetrix: 1}
    ];
    this.chosenGenre = this.genres[0];
    this.filmetricEvals = [
      [0,"critics like a lot more"],
      [1,"critics like more"],
      [2,"critics and audiences like equally"],
      [3,"audiences like more"],
      [4,"audiences like a lot more"]
    ];
    this.chosenEval = this.filmetricEvals[0];
    this.discover = function(evaluation, genre){
      searchService.discover(evaluation[0], genre.id).then(function(movies){
        $scope.options = movies;
      });
    };
  }]);
var movies = [
  {
    title: "Her",
    release_date: "Fri, 10 Jan 2014",
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
    release_date: "Fri, 04 Oct 2013",
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
    release_date: "Mon, 25 Dec 2006",
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
    release_date: "Fri, 15 Jul 1988",
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
    release_date: "Fri, 18 Dec 2009",
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
    release_date: "Fri, 01 Jun 1984",
    critics_score: 96,
    audience_score: 87,
    critics_consensus: "An infectiously fun blend of special effects and comedy, with Bill Murray's hilarious deadpan performance leading a cast of great comic turns.",
    poster_link: "http://content9.flixster.com/movie/11/16/74/11167403_ori.jpg",
    rating: "PG",
    rt_link: "http://www.rottentomatoes.com/m/ghostbusters/",
    filmetric: 9
  },
];
