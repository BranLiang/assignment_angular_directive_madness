var DirectiveMadness = angular.module('DirectiveMadness', []);

DirectiveMadness.controller('MadnessCtrl', ['$scope', function ($scope) {

}]);

DirectiveMadness.directive('mainNav', function () {
	return {
		templateUrl: "directive/mainNav.html",
		restrict: "E",
		scope: {},
	};
});

DirectiveMadness.directive('radiosForm', function () {
	return {
		templateUrl: "directive/radiosForm.html",
		restrict: "E",
		scope: {},
	}
});

DirectiveMadness.directive('mainHeader', function () {
	return {
		restrict: "E",
		template: "<h1><ng-transclude></ng-transclude></h1>",
		transclude: true,
		scope: {},
	};
});

DirectiveMadness.directive('copyright', function () {
	return {
		restrict: "E",
		template: "<p style='text-align: center'>Hello world<ng-transclude></ng-transclude> {{ year }}</p>",
		transclude: true,
		scope: {
			year: "@"
		},
		link: function (scope, element, attributes) {
			scope.year = new Date().getFullYear();
		},
	};
});

DirectiveMadness.directive('colorize', function () {
	return {
		restrict: "A",
		scope: {
			color: "@",
			background: "@",
		},
		link: function (scope, element, attributes) {
			element.css("background", scope.background).css("color", scope.color);
		}
	};
});

// DirectiveMadness.directive('mouseDetect', ['$document', function ($document) {
// 	return {
// 		restrict: "E",
// 		template: "<p>Mouse button is: {{ mouseState }}</p>",
// 		scope: {
// 			mouseState: "="
// 		},
// 		link: function (scope, element, attributes) {
// 			$document.on('mousedown', function () {
// 				scope.mouseState = "DOWN";
// 			});
// 			$document.on('mouseup', function () {
// 				scope.mouseState = "UP";
// 			});
// 		},
// 	};
// }]);
