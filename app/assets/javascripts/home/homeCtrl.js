angular.module('crowAndKey')
.controller('HomeCtrl', [
  '$scope',
  'books',
  'Auth',
  function($scope, books, Auth) {
    $scope.books = books.books;
    Auth.currentUser().then(function(user) {
      $scope.user = user;
      $scope.admin = user.is_admin ? true : false;
    });
    $scope.addBook = function() {
      books.create({
        title: $scope.title,
        author: $scope.author,
        summary: $scope.summary,
        image: $scope.image
      });
    }
  }
]);
