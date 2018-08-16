'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('SignupCtrl', function($rootScope, $scope, $state, $http, $location) {
    console.log("loaded")
    $scope.$state = $state;

    $scope.submit = function(){
        $scope.succuessBlock = 1;

        if($scope.password !== $scope.confirmPassword){
            $scope.pwderror = true;
        }else{
            $scope.pwderror = false;
        }
        var formData = {
            "firstname": $scope.fname,
            "lastname": $scope.lname,
            "username": $scope.uname,
            "passwd": $scope.password,
            "project": "ATK",
            "role": $scope.role
    };
        console.log(formData);

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + '/signup',
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
                $scope.succuessBlock = 1;
                /*$scope.loginData  = response.data;
                if(response.data.login.status == "200"){
                    $location.path('/dashboard');
                }else{
                    $scope.loginError = 1;
                }*/
        }, function (error) {
            console.log(error)
        });
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
