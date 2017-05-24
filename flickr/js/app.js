angular.module('flickrApp', ['ngRoute','angularGrid'])
    .config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');  
    $routeProvider
      .when('/', {
        templateUrl: 'templates/recentimages.html',
        controller: 'recentImagesController',
      })
      .when('/size/:id', {
        templateUrl: 'templates/size.html',
        controller: 'sizeController',
      })
      .when('/sizewise/:id1/:id2', {
          templateUrl: 'templates/sizewiseimage.html',
          controller: 'requestedImageController',
      })
      .otherwise({
        redirectTo: '/'
      });
  })
.constant('API_URL', 'http://flick.dev/')
.service('imageService',['$q','$http','API_URL','$timeout',function($q,$http,API_URL,$timeout){
            
        this.loadImages = function(){
            $('.loader').fadeIn();
            return $http.get(API_URL+"getAllLatestPhotos/25");
        };
    }])
    .controller('recentImagesController', ['$scope','$http','imageService', 'angularGridInstance','API_URL','$timeout', function ($scope,$http,imageService,angularGridInstance,API_URL,$timeout) {
       
      $scope.typeOptions = [
        { name: '25', value: '25' }, 
        { name: '50', value: '50' }, 
        { name: '100', value: '100' },
        { name: '200', value: '200' },
        { name: '300', value: '300' },
        { name: '500', value: '500' },
        ];
        $scope.form = {type : $scope.typeOptions[0].value};
    
        $scope.getImagePerPage=function(per_page)
        { 
          $('.loader').fadeIn();
          $http.get(API_URL+'getAllLatestPhotos/'+per_page).then(function(response){
            $scope.pics = response.data.photos.photo;
          }); 
          $timeout(function () {
              $('.loader').fadeOut();
          }, 10000);
      } 

       imageService.loadImages().then(function(data){
            data.data.photos.photo.forEach(function(obj){
            });
           $scope.pics = data.data.photos.photo;
             $timeout(function () {
              $('.loader').fadeOut();
          }, 10000);    
        });
    }])
  .controller('sizeController',['$scope','$http','$routeParams','$location','API_URL','$timeout',function($scope,$http,$routeParams,$location,API_URL,$timeout){
        $scope.msg=false;
        $('.loader').fadeIn();
        $http.get(API_URL+'getAllSizesOfPhoto/'+$routeParams.id).then(function(response){
           if(response.data.stat=='fail')
           {
              $scope.msg=true;
              $scope.message = response.data.message;
           }
           else
           {
              $scope.sizes = response.data.sizes.size;
           }
           
        });
        $timeout(function () {
              $('.loader').fadeOut();
          }, 3000);

        $scope.openImage=function(src)
        {

            var arrVars1 = src.split("/");
            var lastVar1 = arrVars1.pop();
            
            var restVar = arrVars1.join("/");
            var arrVars2 = restVar.split("/");
            var lastVar2 = arrVars2.pop();
            
            var quesryString='/sizewise/'+lastVar2+'/'+lastVar1;
            $location.url(quesryString);

        }
    }])
  .controller('requestedImageController',['$scope','$routeParams','API_URL','$timeout',function($scope,$routeParams,API_URL,$timeout){
  $('.loader').fadeIn();  
  $scope.src='https://farm5.staticflickr.com/'+$routeParams.id1+'/'+$routeParams.id2;
  $timeout(function () {
              $('.loader').fadeOut();
          }, 2000);
  $scope.sendeBack=function()
  {
      window.history.back();
  }

}]);
  
