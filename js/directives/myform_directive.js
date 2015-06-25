/**
 * Created by kwill51 on 6/17/2015.
 */
(function(){
    angular.module('dynamicFormsApp').directive('myForm',function(){
        return {
            restrict: 'E',
            template: "<input type=text />",
            link: function(scope, element, attrs) {
                    element.on('click', function(){
                        console.log(angular.element(this));
                        element.addClass('Linked');
                        angular.element(this).find('input').css('background','blue');
                    })
            }
        }
    });
})();