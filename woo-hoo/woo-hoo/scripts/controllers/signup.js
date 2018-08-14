'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('SignupCtrl', function($scope, $state, $location) {
    console.log("loaded")
    $scope.$state = $state;

    $scope.submit = function(){
        return false;
    }
    $scope.cancel = function(){
        $location.path('/login');
    }

    $scope.menuItems = [];
    angular.forEach($state.get(), function (item) {
        if (item.data && item.data.visible) {
            $scope.menuItems.push({name: item.name, text: item.data.text});
        }
    });
  });
