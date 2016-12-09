angular.module('crowAndKey')
.controller('HomeCtrl', [
  '$scope',
  'books',
  function($scope, books) {
    $scope.books = books.books;
  }
]);
