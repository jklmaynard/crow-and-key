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
      return obj;
    }
  ]);
