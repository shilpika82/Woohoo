'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('LoginCtrl', function($scope, $location, $http) {
      var baseURL = 'http://localhost:8080/api/login';

    $scope.submit = function() {




        var raw = {
            "username": $scope.username,
            "password": $scope.password
        };

        $http({
            method: 'POST',
            url: 'http://localhost:8080/api/login',
            headers: {

            'Content-Type': 'application/json'

            },
            data: raw
        }).then(
            function (response) {
                console.log(response.data);
                 if(response.data.login.status == "200"){
                    $location.path('/dashboard');
                 }else{
                    $scope.loginError = 1;
                 }
            }, function (error) {
                $scope.loginError = 1;
            });



      return false;
    }

  $scope.close = function(){
      $scope.loginError = 0;

  }

  $scope.signup = function() {

      $location.path('/signup');

  }

  });
