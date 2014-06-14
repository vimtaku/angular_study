
var module = angular.module("Sub", [])
 .factory('SubFactory', ['$http', function($http) {
    var factory = {};
    factory.getData = function() {
        alert("hello world");
    }
    return factory;
 }]);

var controllers = {};
controllers.MyController = ['$scope', '$log', 'SubFactory',
    function($scope, $log, myFactory) {
        $scope.moge = "mogerattan";
        $scope.getData = myFactory.getData();
    }];

module.controller(controllers);


