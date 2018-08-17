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
    $scope.signupData = {};

    $scope.submit = function(){
        console.log($scope.signupData);
        if($scope.signupData.password !== $scope.signupData.confirmPassword){
            $scope.pwderror = true;
        }else{
            $scope.pwderror = false;
            var formData = {
                "firstname": $scope.signupData.fname,
                "lastname": $scope.signupData.lname,
                "username": $scope.signupData.username,
                "passwd": $scope.signupData.password,
                "project": "ATK",
                "role": $scope.signupData.role
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
                    $scope.statusBlock = 1;
                    $scope.successBlock = 1;
                }, function (error) {
                    $scope.statusBlock = 1;
                    $scope.errorBlock = 1;
                });
        }
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
