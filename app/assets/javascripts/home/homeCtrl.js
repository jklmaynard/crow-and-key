angular.module('crowAndKey')
.controller('HomeCtrl', [
  '$scope',
  function($scope) {
    $scope.test = 'Hello world!';
    $scope.home_test = 'Hello Home World!!';
  }
]);
