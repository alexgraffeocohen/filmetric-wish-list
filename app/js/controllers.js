'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('WishListController', [ 'clearService', 'listService', '$scope', function(clearService, listService, $scope){
    this.movies = listService.getMovies();
    this.showForm = false;
    this.toggleForm = function(){
      clearService.clearAll();
      this.showForm = !this.showForm;
    };
  }])
  .controller('SearchMovieCtrl', [ 'searchService', 'clearService', 'listService', '$scope', function(searchService, clearService, listService, $scope){
    var controller = this;
    this.searchProcessing = false;
    this.showAdvOptions = false;
    this.movieTitle = "";
    this.actorName = "";
    this.directorName = "";
    this.options = [];
    this.init = function(form){
      clearService.setContext(this, this.options);
    };
    this.toggleAdvOptions = function(){
      this.showAdvOptions = !this.showAdvOptions;
    };
    this.search = function(form){
      this.userChoice = {};
      this.titleBlank = false;
      if(this.movieTitle.length == 0){
        this.titleBlank = true;
        return;
      }
      else{
        this.searchProcessing = true;
        searchService.movieSearch(this.movieTitle, this.actorName, this.directorName).then(function(movies){
          controller.options = movies;
          controller.searchProcessing = false;
        });
        this.movieTitle = "";
        this.actorName = "";
        this.directorName = "";
        form.$setPristine();
      }
    };
    this.selectOption = function(option){
      this.userChoice = option;
    };
    this.addToList = function(movie){
     listService.addMovie(movie);
     clearService.clearAll();
    }
  }])
  .controller('DiscoverController', [ 'searchService', '$scope', function(searchService, $scope){
    $scope.options = [];
    $scope.genres = [];
    $scope.filmetricEvals = [];
    $scope.init = function(){
      searchService.browse().then(function(data){
        $scope.genres = data.genres;
        $scope.filmetricEvals = data.filmetricEvals;
        $scope.chosenGenre = $scope.genres[0];
        $scope.chosenEval = $scope.filmetricEvals[0];
      });
    };
    $scope.init();
    this.discover = function(evaluationID, genreID){
      searchService.discover(evaluationID, genreID).then(function(movies){
        $scope.options = movies;
      });
    };
  }]);
