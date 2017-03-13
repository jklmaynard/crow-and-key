angular.module('crowAndKey')
.controller('HomeCtrl', [
  '$scope',
  'books',
  function($scope, books) {
    $scope.books = books.books;
    $scope.admin = function() {
      //this function will be to add/edit books only.
      //today (3/13), no devise gem set up to make admin function feasible
      return true;
    }
    $scope.addBook = function() {
      books.create({
        title: $scope.title,
        author: $scope.author,
        summary: $scope.summary
      });
    }
  }
]);
