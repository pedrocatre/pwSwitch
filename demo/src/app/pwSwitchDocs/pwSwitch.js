/**
 * Directive for the pSwitch library
 */
(function () {
  'use strict';

  angular.module('pwSwitch', []).directive('pwSwitch', [
    '$timeout',
    pwSwitch]);

  function pwSwitch($timeout) {
    return {
      restrict : 'EA',
      require: '?ngModel',
      template: function(tElement, tAttrs) {
        var dataCheckedAttr = (tAttrs.checked) ? 'data-checked="' + tAttrs.checked + '"' : '';
        return '<input type="checkbox" ' + dataCheckedAttr + '/>';
      },
      replace: true,
      scope: {
        model: '=ngModel',
        enabled: '='
      },
      link: function (scope, element, attrs, ngModel) {
        var r = parseInt(attrs.r) || 30,
          g = parseInt(attrs.g) || 87,
          b = parseInt(attrs.b) || 153,
          flat = scope.$eval(attrs.flat);

        element.addClass('pswitch');

        element.pswitch({r: r, g: g, b: b, flat: flat});

        var elementWrapper = element.parent('.pswitch-wrapper');

        if(!ngModel) {
          return;
        }

        scope.$watch('model', function(newValue, oldValue) {
          if(ngModel.$viewValue === true) {
            element.trigger('check');
          } else {
            element.trigger('uncheck');
          }
        });

        scope.$watch('enabled', function(newValue, oldValue) {
          if(newValue === undefined) {
            return;
          }

          var disabled = !newValue,
            disabledClass = 'pswitch-disabled';

          if(disabled) {
            elementWrapper.addClass(disabledClass);
          } else {
            elementWrapper.removeClass(disabledClass);
          }

          element.prop('disabled', !newValue);
        });

        element.on('change', function() {
          // Reason to use timeout here http://stackoverflow.com/a/18996042/3094399
          $timeout(function() {
            if(element.prop('checked')) {
              ngModel.$setViewValue(true);
            } else {
              ngModel.$setViewValue(false);
            }
          });
        });

        // Cleanup
        scope.$on('$destroy', function() {
          // Remove all event handlers from element
          element.off();
        });
      }
    };
  }
}());
