var app = angular.module('myApp', [ 'ngRoute' ]);
app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : '../templates/index.html',
                controller  : 'listingController'
            })
        .when('/about', {
            templateUrl : 'templates/size.html',
            controller  : 'sizeController'
        })

        .when('/contact', {
            templateUrl : 'templates/selectedSize.html',
            controller  : 'selectedSizeController'
        });
});