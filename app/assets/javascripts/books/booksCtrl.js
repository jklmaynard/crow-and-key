angular.module('crowAndKey')
.controller('BooksCtrl', [
  '$scope',
  '$stateParams',
  'books',
  '$state',
  function($scope, $stateParams, books, $state){
    $scope.book = books.books[$stateParams.id];
    $scope.admin = function() {
      //same in homeCtrl, this bool will be set dynamically once devise gem is installed
      return true
    };
    $scope.edit = function() {
      books.edit({
        id: $scope.book.id,
        title: $scope.book.title,
        summary: $scope.book.summary,
        author: $scope.book.author
      });
    };
    $scope.delete = function(book) {
      books.delete(book)
      $state.go('home');
    }
  }
]);
