'use strict';


// Declare app level module which depends on filters, and services
angular.module('filmetric', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
])
.config(function($httpProvider) {
  //Enable cross domain calls
  $httpProvider.defaults.useXDomain = true;

  //Remove the header used to identify ajax call  that would prevent CORS from working
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/my-list', {templateUrl: 'partials/my-list.html', controller: 'MovieListController', controllerAs: 'listCtrl'});
  $routeProvider.when('/discover', {templateUrl: 'partials/discover.html', controller: 'DiscoverController', controllerAs: 'discCtrl'});
  $routeProvider.otherwise({redirectTo: '/my-list'});
}]);
