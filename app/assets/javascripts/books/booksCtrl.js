angular.module('crowAndKey')
.controller('BooksCtrl', [
  '$scope',
  'books',
  'book',
  '$state',
  'Auth',
  function($scope, books, book, $state, Auth){
    $scope.book = book;
    books.getQuestions($scope.book.id).then(function(res) {
      $scope.questions = res.data;
    })
    Auth.currentUser().then(function(user) {
      $scope.user = user;
      $scope.admin = $scope.user.is_admin ? true : false;
    });
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
    };
    $scope.addQuestion = function() {
      if ($scope.text === '') {
        return
      }
      books.addQuestion($scope.book.id, {
        text: $scope.text,
        user_id: $scope.user.id
      }).then(function(question) {
        $scope.questions.push(question.data);
      });
      $scope.text = '';
    }
    $scope.upVotes = function(question) {
      books.incrementUpVotes(book, question);
    }
  }
]);
