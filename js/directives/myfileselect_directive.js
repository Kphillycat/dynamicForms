/**
 * Created by kwill51 on 6/18/2015.
 */
(function(){
    angular.module('dynamicFormsApp').directive('myFileSelect',function(){
        return {
            restrict: 'E',
            template: "<input type='file'/>"
        }
    });
})();