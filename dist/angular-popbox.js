
/*!
 * angular-popbox - Angular directive for popbox plugin
 * v0.3.2
 * https://github.com/firstandthird/angular-popbox
 * copyright First + Third 2014
 * MIT License
*/
angular.module('ftPopbox', [])
  .directive('popbox', function() {
    return {
      restrict: 'A',
      link : function(scope, el, attrs){
        var $el = $(el);
        var cls;
        var direction = attrs.popboxDirection || 'down';

        var updateElement = function(value) {
          cls.setText(value);
        };

        $el.popbox({
          direction: direction
        });
        cls = $el.data('popbox');

        attrs.$observe('popbox', function(newValue) {
          updateElement(newValue);
        });

        var destroyDirective = function(){
          if (cls){
            cls.destroy();
            cls = null;
          }
        };

        scope.$on('$destroy', destroyDirective);
        el.one('$destroy', destroyDirective);
      }
    };
  });
