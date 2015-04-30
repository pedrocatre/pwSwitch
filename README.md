# pwSwitch for AngularJS
Turn boring checkboxes into pretty switches. An AngularJS directive for the pswitch library.

## Demo

[http://pedrocatre.github.io/pwSwitch/#/](http://pedrocatre.github.io/pwSwitch/#/)

## Dependencies

This plugin uses AngularJS version 1.x and the [pswitch library](http://www.pischke.me/pswitch/demo/pswitch.html) and jQuery.

## Install

```
bower install angular-pwSwitch --save
```

Include the stylesheet and javascript from the pswitch dist folder into your project. 

```html
<link rel="stylesheet" type="text/css" href="bower_components/pswitch/dist/jquery.pswitch.min.css" />
<script type="javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
<script type="javascript" src="bower_components/pswitch/dist/jquery.pswitch.min.js"></script>
```

Also include the pwSwitch angular directive from the pwSwitch dist folder, after you have included angular.

```html
<script type="javascript" src="bower_components/angular-pwSwitch/dist/pwSwitch.min.js"></script>
```

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

To change the switch color, just pass the color code for the switch:

```html
<pw-switch ng-model="switchValue"
r="140"
g="25"
b="30">
</pw-switch>
```

To control if the switch is enabled or disabled pass it in:

```html
<pw-switch ng-model="switchValue"
enabled="switchValueEnabled"></pw-switch>
```

To go to a flat-ui style pass flat=true:

```html
<pw-switch ng-model="switchValue"
flat="true"></pw-switch>
```

## Dependencies

This plugin uses AngularJS version 1.x and the pswitch library and jQuery.

## Browser compatibility

Chrome, Safari, Firefox, IE9+

## Credits

[pswitch jQuery lib](https://github.com/thmp/pswitch) for transforming the checkboxes built by [Thomas Pischke](http://www.pischke.me/)

## License

The code in this repository can be used under the MIT License.
