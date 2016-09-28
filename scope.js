var ScopesApp = angular.module('ScopesApp', []);

ScopesApp.controller('ScopesCtrl', ['$scope', function ($scope) {
	$scope.oneWay = "one way variable";
	$scope.twoWay = "two way variable";

	$scope.sayHello = function (name) {
		console.log("Hello " + name);
	};
}]);

ScopesApp.directive('isolated', function () {
	return {
		templateUrl: "directive/isolated.html",
		restrict: "E",
		scope: {
			twoWay: "=",
			oneWay: "@",
			sayHello: "&"
		},
		link: function (scope) {
			scope.twoWay = "two way changed";
			scope.oneWay = "one way changed";
		},
	};
});
