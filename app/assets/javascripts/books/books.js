angular.module('crowAndKey')
  .factory('books', [
    '$http',
    function($http){
      var obj = {
        books: []
      }
      obj.getAll = function() {
        return $http.get('/books.json').then(function(data) {
          angular.copy(data.data, obj.books);
        });
      };
      obj.get = function(id) {
        return $http.get('/books/' + id + '.json').then(function(data) {
          return data.data;
        });
      };
      obj.create = function(book) {
        return $http.post('/books.json', book).then(function(data) {
          obj.books.push(data.data);
          return obj.books;
        });
      };
      obj.edit = function(book) {
        return $http.put('/books/' + book.id + '.json', book);
      };
      obj.delete = function(book) {
        position = obj.books.indexOf(book);
        return $http.delete('/books/' + book.id + '.json').then(function() {
          obj.books.splice(position, 1);
        });
      };
      obj.addQuestion = function(book_id, question) {
        return $http.post('/books/' + book_id + '/questions.json', question);
      };
      obj.getQuestions = function(book_id) {
        return $http.get('/books/' + book_id + '/questions.json');
      };
      return obj;
    }
  ]);
