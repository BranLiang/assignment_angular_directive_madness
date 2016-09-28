var ScopesApp = angular.module('ScopesApp', []);

ScopesApp.controller('ScopesCtrl', ['$scope', '$window', function ($scope, $window) {
	$scope.oneWay = "one way variable";
	$scope.twoWay = "two way variable";

	$scope.sayHello = function (name) {
		$window.alert("Hello " + name);
	};
}]);

ScopesApp.directive('isolated', ['$window', function ($window) {
	return {
		templateUrl: "directive/isolated.html",
		restrict: "E",
		scope: {
			twoWay: "=",
			oneWay: "@",
			sayHello: "&",
		},
		link: function (scope) {
			scope.twoWay = "two way changed";
			scope.oneWay = "one way changed";
			console.log(scope.sayHello);
		},
	};
}]);
