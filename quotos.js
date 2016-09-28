var QuotosApp = angular.module('QuotosApp', []);

QuotosApp.controller('QuotosCtrl', ['$scope', function ($scope) {
	$scope.quotos = [];
	$scope.quotoParams = {};

	$scope.createQuoto = function (formIsvalid, quotoForm) {
		if (formIsvalid) {
			var quoto = {
				message: $scope.quotoParams.message,
				author: $scope.quotoParams.author,
			};
			$scope.quotos.push(quoto);
			$scope.quotoParams = {};
			quotoForm.$setPristine();
			quotoForm.$setUntouched();
		}
	};

	$scope.deleteQuoto = function (quoto) {
		var index = $scope.quotos.indexOf(quoto);
		$scope.quotos.splice(index, 1);
	};
}]);

QuotosApp.directive('quotoForm', function () {
	return {
		restrict: "E",
		templateUrl: "directive/quotoForm.html",
		scope: true
	};
});

QuotosApp.directive('quotosIndex', function () {
	return {
		restrict: "E",
		templateUrl: "directive/quotosIndex.html",
		scope: true
	};
});
