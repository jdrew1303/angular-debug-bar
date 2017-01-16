(function (angular, undefined) {
  'use strict';
  angular.module('adb.controllers')
    .controller('TestCtrl', TestCtrl);

  TestCtrl.$inject = ['TestCtrl'];

  function TestCtrl ($scope) {
    $scope.books = [
      {
        title: 'ng-book',
        authors: [
          {
            name: 'Ari Lerner'
          }
        ]
      },
      {
        title: 'AngularJS',
        authors: [
          {
            name: 'Brad Green'
          },
          {
            name: 'Shyam Seshadri'
          }
        ]
      }
    ];
  }
}(window.angular));
