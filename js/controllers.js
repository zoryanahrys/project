var abcApp = angular.module('abcApp', []);

abcApp.controller('UsersPage1Ctrl', ['$scope', '$http', function($scope, $http){
    $http.get('users/userPage1.json').success(function(data, status, headers, config){
        $scope.users = data;
    });
}]);

abcApp.controller('UsersPage2Ctrl', ['$scope', '$http', function($scope, $http){
    $http.get('users/userPage2.json').success(function(data, status, headers, config){
        $scope.users = data;
    });
}]);
        
abcApp.controller('UsersPage3Ctrl', ['$scope', '$http', function($scope, $http){
    $http.get('users/userPage3.json').success(function(data, status, headers, config){
        $scope.users = data;
    });
}]);
