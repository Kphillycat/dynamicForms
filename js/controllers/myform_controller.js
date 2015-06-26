/**
 * Created by kwill51 on 6/17/2015.
 */
(function(){
    angular.module('dynamicFormsApp', []).controller('ctrl', formsCtrl);

    function formsCtrl(){
        this.type = "text";
    }
})();