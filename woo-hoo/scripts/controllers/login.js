'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('LoginCtrl', function($scope, $location, $http, $rootScope) {

    $scope.submit = function() {
        localStorage.setItem("username", $scope.username);
        var formData = {
            "username": $scope.username,
            "password": $scope.password
        };

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + '/login',
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: formData
        }).then(
            function (response) {
                console.log(response.data)
                $scope.loginData  = response.data;
                if(response.data.login.status == "200"){
                    $location.path('/dashboard');
                }else{
                    $scope.loginError = 1;
                    $scope.existLoginError = 1;
                }
            }, function (error) {
                $scope.loginError = 1;
                $scope.serverError = 1;
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
