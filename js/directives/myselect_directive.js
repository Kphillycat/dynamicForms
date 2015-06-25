/**
 * Created by kwill51 on 6/17/2015.
 */
(function(){
    angular.module('dynamicFormsApp').directive('mySelect',function(){
        return {
            restrict: 'E',
            template: "<select><option value='One'>One</option></select>"
        }
    });
})();