'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
    .controller('RatingsCtrl', function($scope, $http, $rootScope, $state, $modalInstance, itemDetails) {
        $scope.$state = $state;
        console.log(itemDetails)
        $scope.itemData = itemDetails;
        $scope.loggedInUserName =  localStorage.getItem("username");
        $scope.close = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.rating = 0;
        $scope.ratings = [{
            current: 1,
            max: 5
        }];

        $scope.getSelectedRating = function (rating) {
            console.log(rating);
        }

        $scope.sendRate = function(){
            console.log($scope.ratings[0].current);
            /*alert("Thanks for your rating:" + $scope.ratings[0].current)*/
            //alert("Thanks for your rates!\n\nFirst Rate: " + $scope.ratings[0].current+"/"+$scope.ratings[0].max
            //  +"\n"+"Second rate: "+ $scope.ratings[1].current+"/"+$scope.ratings[0].max)

            var formData = {
                "rating": $scope.ratings[0].current.toString(),
                "comments": $scope.comments
            };
            console.log(formData);

            $http({
                method: 'POST',
                url: $rootScope.baseUrl + '/feedback/' + $scope.itemData.name,
                headers: {
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
                    'Content-Type': 'application/json'
                },
                data: formData
            }).then(
                function (response) {
                    console.log(response.data);
                    $modalInstance.dismiss('cancel');
                }, function (error) {
                    $modalInstance.dismiss('cancel');
                });
            return false;

        }
    });
