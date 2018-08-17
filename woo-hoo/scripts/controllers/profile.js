'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
    .controller('ProfileCtrl', function($scope, $http, $rootScope, $state) {
        $scope.$state = $state;
        $scope.loggedInUserName =  localStorage.getItem("username");
        $scope.profileData = {};
        var emptyArray = [];

        $scope.getProfile = function(){
            $http({
                method: 'GET',
                url: $rootScope.baseUrl + '/getprofile/' + $scope.loggedInUserName,//url: 'json/feedback.json',
                headers: {
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(
                function (response) {
                    console.log(response.data);
                    $scope.profileData.name = response.data.name;
                    $scope.profileData.role = response.data.role;
                    for(var i = 0; i < response.data.profile.length;i++){
                        emptyArray.push(JSON.parse(response.data.profile[i]));
                    }
                    $scope.ratingData = emptyArray;

                }, function (error) {
                    console.log(error)
                });
            return false;

        }

        $scope.getProfile();
    });