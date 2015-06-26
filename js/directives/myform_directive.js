/**
 * Created by kwill51 on 6/17/2015.
 */
(function(){
    angular.module('dynamicFormsApp').directive('myForm', myFormDirective);

    myFormDirective.$inject = ['$sce'];

    function myFormDirective($sce){
        return {
            restrict: 'E',
            template: "<ng-include src='template'/>",
            scope: {
                type: "@"
            },
            link: function(scope, element, attrs) {
                    scope.template = "templates/pages/inputs/" + attrs.type + ".html";
                    element.on('click', function(e){
                        element.addClass('Clicked');
                        console.log('You clicked on ' + e.target.nodeName);
                    })
            }
        }
    }
})();