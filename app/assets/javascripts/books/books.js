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
      }
      obj.create = function(book) {
        return $http.post('/books.json', book).then(function(data) {
          obj.books.push(data.data);
          return obj.books;
        })
      }
      obj.edit = function(book) {
        return $http.put('/books/' + book.id + '.json', book);
      }
      obj.delete = function(book) {
        position = obj.books.indexOf(book);
        return $http.delete('/books/' + book.id + '.json').then(function() {
          obj.books.splice(position, 1);
        });
      }
      return obj;
    }
  ]);
