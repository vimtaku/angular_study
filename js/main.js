
var module = angular.module("myApp", ["ngRoute", "Sub"])
 .factory('MyFactory', ['$http', function($http) {
    var factory = {};
    factory.getData = function() {
        return $http.get('data.json').success(function(data) {
            return data;
        });
    }
    return factory;
 }])
 .config(['$routeProvider', function($routeProvider) {
     $routeProvider.
      when('/', {
        templateUrl: 'partials/index.html',
        controller: 'MyController'
      }).
      when('/user/:userId', {
        templateUrl: 'partials/user.html',
        controller: 'UserDetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });

 }]);

var controllers = {};
controllers.MyController = [
'$scope', '$log', 'MyFactory','SubFactory',
    function($scope, $log, myFactory, subFactory) {
        $scope.moge = "mogerattan";
        $scope.$log = $log;
        $scope.getData = function() {
            myFactory.getData().then(function(res){
                console.log("kiteru?");
                console.log(res.data);
                $scope.loaded_data = res.data;
            })
        }
        $scope.getDataFromSubFactory = function() {
            subFactory.getData();
        }
    }];
controllers.UserDetailCtrl = ['$scope','MyFactory', '$routeParams', function($scope, myFactory, $routeParams) {
console.log("yobidasare");
        myFactory.getData().then(function(res){
        console.log("loading");
            $scope.loaded_data = res.data;
        });
}];

module.controller(controllers);

