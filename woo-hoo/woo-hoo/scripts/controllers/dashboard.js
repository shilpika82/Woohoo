'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('DashboardCtrl', function($scope, $rootScope, $state, $modal, $http) {
    $scope.$state = $state;

    $scope.menuItems = [];
    angular.forEach($state.get(), function (item) {
        if (item.data && item.data.visible) {
            $scope.menuItems.push({name: item.name, text: item.data.text});
        }
    });

    $scope.loggedInUserName =  localStorage.getItem("username");

    $scope.profiles = [
        {
            "name" : "Kirit Kundu",
            "role" : "Product Owner"
        },
        {
            "name" : "Rajesh Ghosh",
            "role" : "Scrum Master"
        },
        {
            "name" : "Vaibhav Arora",
            "role" : "Architect"
        },
        {
            "name" : "Shilpika P",
            "role" : "Automation Tester"
        },
        {
            "name" : "Pooja K",
            "role" : "Manual Tester"
        },
        {
            "name" : "Fayaj Pathan",
            "role" : "FrontEnd Developer"
        },
        {
            "name" : "Sandeep Mishra",
            "role" : "Mulesoft Developer"
        },
        {
            "name" : "Vijay Bokhare",
            "role" : "Dev-Ops Engineer"
        }
    ]



      $http({
          method: 'GET',
          url: $rootScope.baseUrl + '/dashboard/' + $scope.loggedInUserName,
          headers: {
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      }).then(
          function (response) {
              console.log(response.data)
      }, function (error) {
          console.log(error)
      });


      $scope.close = function () {
          $modalInstance.dismiss('cancel');
      };

      $scope.select= function(item) {
          $scope.itemSelected =  true;
          $scope.personName  = item.name;
          $scope.selected = item;
          var modalInstance = $modal.open({
              templateUrl: 'views/dashboard/ratings.html',
              controller: 'RatingsCtrl',
              resolve: {
                  itemDetails: function () {
                      return item;
                  }
              }
          });
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
