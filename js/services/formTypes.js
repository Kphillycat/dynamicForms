;(function(){
    angular.module('dynamicFormsApp').factory('formTypes', formsTypesFactory);

    formsTypesFactory.$inject = ['$http'];

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
	];

	function formsTypesFactory($http) {
		// $http.get('data.json').success(function(data) {
        // 	this.types = data;
        // });
		return data;
	}
})();