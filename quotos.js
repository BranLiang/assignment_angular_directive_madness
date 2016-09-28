var QuotosApp = angular.module('QuotosApp', []);

QuotosApp.controller('QuotosCtrl', ['$scope', function ($scope) {
	$scope.quotos = [];
	$scope.quotoMessage = "Hello";
	$scope.quotoAuthor = "World";

	$scope.createQuoto = function () {
		var quoto = {
			message: $scope.quotoMessage,
			author: $scope.quotoAuthor,
		};
		$scope.quotos.push(quoto);
		$scope.quotoMessage = $scope.quotoAuthor = "";
	};
}]);

QuotosApp.directive('quotoForm', function () {
	return {
		restrict: "E",
		templateUrl: "directive/quotoForm.html",
		scope: true,
	};
});

QuotosApp.directive('quotosIndex', function () {
	return {
		restrict: "E",
		templateUrl: "directive/quotosIndex.html",
		scope: true
	};
});
