/**
 * Created by kwill51 on 6/17/2015.
 */
(function(){
    angular.module('dynamicFormsApp', []).controller('ctrl', formsCtrl);

    formsCtrl.$inject = ['$http'];

    var data = [
		{
			"type" : "text"
		},
		{
			"type" : "text"
		},
		{
			"type" : "text"
		},
		{
			"type" : "select"
		},
		{
			"type" : "file"
		}
	]

    function formsCtrl($http){
        this.types = data;
        // $http.get('data.json').success(function(data) {
        // 	this.types = data;
        // });
    }
})();