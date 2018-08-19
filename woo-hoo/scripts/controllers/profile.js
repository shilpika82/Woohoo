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
        console.log($rootScope.stateChanged);
        $scope.menuItems = [];
        angular.forEach($state.get(), function (item) {
            if (item.data && item.data.visible) {
                $scope.menuItems.push({name: item.name, text: item.data.text});
            }
        });

        $scope.stateChange = function () {
            //localStorage.setItem("username", $scope.username);
            $rootScope.stateChanged = 1;
        }

        function reload() {
            //$localStorage.hasReloaded = true;
            window.location.reload();
        }
        if ($rootScope.stateChanged == 1) {reload()};

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
