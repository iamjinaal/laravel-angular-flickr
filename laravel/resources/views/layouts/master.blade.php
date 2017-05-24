<!DOCTYPE Html>
<Html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Flickr - Api Demo</title>
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  {!! Html::style('assets/css/bootstrap.min.css') !!}
  {!! Html::style('assets/css/style.css') !!}

</head>
<body ng-app="myApp" ng-controller="myCtrl">


      @yield('content')
  


{!! Html::script('assets/js/angular.min.js') !!}
{!! Html::script('assets/js/angular-route.min.js') !!}
{!! Html::script('assets/js/controller.js') !!}

</body>
</Html>
