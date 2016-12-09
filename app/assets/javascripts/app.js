angular.module('crowAndKey', ['ui.router', 'templates'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'HomeCtrl'
      }
    );
    $stateProvider.state('books', {
        url: '/books/{id}',
        templateUrl: 'books/_books.html',
        controller: 'BooksCtrl'
    });
    $urlRouterProvider.otherwise('home');
  }
])
