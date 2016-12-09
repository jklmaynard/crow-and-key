angular.module('crowAndKey')
.controller('BooksCtrl', [
  '$scope',
  '$stateParams',
  'books',
  function($scope, $stateParams, books){
    $scope.book = books.books[$stateParams.id]
  }
]);
