/**
 * Created by kwill51 on 6/17/2015.
 */
;(function(){
    angular.module('dynamicFormsApp').controller('ctrl', formsCtrl);

    formsCtrl.$inject = ['formTypes'];

    function formsCtrl(formTypes) {
        this.types = formTypes;
    }
})();