angular.module('crowAndKey', ['ui.router', 'templates', 'Devise', 'naif.base64'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  'AuthProvider',
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
      controller: 'BooksCtrl',
      resolve: {
        book: ['$stateParams', 'books', function($stateParams, books) {
          return books.get($stateParams.id);
        }]
      }
    });
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function() {
          $state.go('home');
        }, function(err) {
          console.log(err.data.error);
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
        }, function(err) {
          console.log(err.data.error);
        });
      }]
    });
    $urlRouterProvider.otherwise('home');
  }
])
