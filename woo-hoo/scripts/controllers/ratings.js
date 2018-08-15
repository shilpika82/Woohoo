'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
    .controller('RatingsCtrl', function($scope, $state, $modalInstance, itemDetails) {
        $scope.$state = $state;
        console.log(itemDetails)
        $scope.itemData = itemDetails;
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
        }
    });
