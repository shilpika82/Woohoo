'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('DashboardCtrl', function($scope, $state) {
    $scope.$state = $state;

    $scope.menuItems = [];
    angular.forEach($state.get(), function (item) {
        if (item.data && item.data.visible) {
            $scope.menuItems.push({name: item.name, text: item.data.text});
        }
    });

    $scope.profiles = [
        {
            "name" : "John Doe",
            "role" : "Product Owner"
        },
        {
            "name" : "Robert Cook",
            "role" : "Scrum Master"
        },
        {
            "name" : "Maria Dane",
            "role" : "Automation Tester"
        },
        {
            "name" : "Alan Border",
            "role" : "Manual Tester"
        },
        {
            "name" : "JJ Smith",
            "role" : "Developer"
        },
        {
            "name" : "Matthew Wade",
            "role" : "Developer"
        },
        {
            "name" : "Sean Ryan",
            "role" : "Developer"
        },
        {
            "name" : "Sean Ryan",
            "role" : "Developer"
        },
    ]

      $scope.select= function(item) {
          $scope.itemSelected =  true;
          $scope.personName  = item.name;
          $scope.selected = item;
      };

      $scope.isActive = function(item) {
          return $scope.selected === item;
      }

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
