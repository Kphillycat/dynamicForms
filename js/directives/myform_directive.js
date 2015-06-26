/**
 * Created by kwill51 on 6/17/2015.
 */
(function(){
    angular.module('dynamicFormsApp').directive('myForm', myFormDirective);

    myFormDirective.$inject = ['$sce'];

    function myFormDirective($sce){
        return {
            restrict: 'E',
            template: "",
            scope: {
                type: "@"
            },
            link: function(scope, element, attrs) {
                    if (attrs.type && attrs.type == "text") {
                        element.html($sce.trustAsHtml("<input type=text /> <br /> <br />"));
                    }
                    if (attrs.type && attrs.type == "select") {
                        element.html($sce.trustAsHtml("<select><option value='One'>One</option></select> <br /> <br />"));
                    }
                    if (attrs.type && attrs.type == "file") {
                        element.html($sce.trustAsHtml("<input type=file /> <br /> <br />"));
                    }
                    element.on('click', function(){
                        element.addClass('Linked');
                        angular.element(this).find('input').css('background','blue');
                    })
            }
        }
    }
})();