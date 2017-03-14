angular.module('crowAndKey', ['ui.router', 'templates', 'Devise'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'HomeCtrl',
      resolve: {
        bookPromise: ['books', function(books) {
          return books.getAll();
        }]
      }
    });
    $stateProvider.state('books', {
      url: '/books/{id}',
      templateUrl: 'books/_books.html',
      controller: 'BooksCtrl'
    });
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function() {
          $state.go('home');
        });
      }]
    });
    $stateProvider.state('register', {
      url: '/register',
      templateUrl: 'auth/_register.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function() {
          $state.go('home');
        });
      }]
    });
    $urlRouterProvider.otherwise('home');
  }
])
