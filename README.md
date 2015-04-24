# pwSwitch for AngularJS - turn boring checkboxes into pretty switches
An AngularJS directive for the pswitch library.

## Install

bower install angular-pwSwitch --save

## Usage Example

Inject in the dependencies:

```javascript
angular.module('app', [
        'pwSwitch'
    ]);
```

And use the directive in a template:

```html
<pw-switch ng-model="switchValue"></pw-switch>
```

To display labels on the sides of the switch for the on and off state, define two data attributes on the directive. The switch will be displayed without labels if you do not specify them.

```html
<pw-switch ng-model="switchValue"
data-checked="activated"
data-unchecked="deactivated">
</pw-switch>
```

Like a checkbox you can specify ng-true-value and ng-false-value to specify the value to which the expression should be set when selected.  you can read more about it in the [AngularJS docs](https://docs.angularjs.org/api/ng/input/input%5Bcheckbox%5D). And here is an example of that:

```html
<pw-switch ng-model="switchValue"
ng-true-value="'ACTIVE'"
ng-false-value="'DEACTIVATED'"
data-checked="activated"
data-unchecked="deactivated">
</pw-switch>
```

## Dependencies

This plugin uses AngularJS version 1.x and the pswitch library and jQuery.

## License

The code in this repository can be used under the MIT License.
