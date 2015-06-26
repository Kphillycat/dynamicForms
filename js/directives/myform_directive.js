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
                    switch (attrs.type) {
                        case "select":
                            element.html($sce.trustAsHtml("<select><option value='One'>One</option></select> <br /> <br />"));
                            break;
                        case "file":
                            element.html($sce.trustAsHtml("<input type=file /> <br /> <br />"));
                            break;
                        case "text":
                        default:
                            element.html($sce.trustAsHtml("<input type=text /> <br /> <br />"));
                            break;
                    }
                    element.on('click', function(){
                        element.addClass('Linked');
                        angular.element(this).find('input').css('background','blue');
                    })
            }
        }
    }
})();