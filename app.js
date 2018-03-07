var albumSearch = angular.module('albumSearch',['ngResource','ngRoute']);

albumSearch.config(function($routeProvider){

    $routeProvider
    .when('/list',{
        templateUrl : 'templates/list.html',
        controller : 'mainController'
    }
    
    )
})



//services

albumSearch.service('getApi',function($resource){

   this.api = $resource('http://www.omdbapi.com/?&plot=short',{callback :"JSON_CALLBACK"},{get:{method: "JSONP"}});
   this.Data =  function(source,name){ return source.get({t:name})}
    })



//controllers
albumSearch.controller('mainController',['$scope','$resource','$location','getApi',function($scope,$resource,$location,getApi){

    
    $scope.movieName = '';
    
    $scope.submit = function(){
        $scope.api = getApi.api;
        $scope.getData = getApi.Data($scope.api,$scope.movieName);
        $location.path('/list');
        console.log($scope.getData);
        
    }
        
}])



