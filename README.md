# Color.js

## Usage

Colors can be created by calling the `Color` function with `new` and either a
CSS color string or three integer values for the red, green and blue channels
and an optional float value for alpha:

```js
var redColor     = new Color(255, 0, 0);
var reddishColor = new Color(255, 0, 0, 0.9);
var greenColor   = new Color('#0f0');
var blueColor    = new Color('blue');
var yellowColor  = new Color('rgb(255, 255, 0)');
var aquaColor    = new Color('hlsa(190, 90%, 85%, 0.5)');
```

The `fromString()`, `fromRGB()` and `fromHSL` methods are complimentary to the
constructor syntax:

```js
var reddishColor = Color.fromString('rgba(255, 0, 0, 0.5)');
var greenColor   = Color.fromRGB(0, 255, 0, 0.99);
var yellowColor  = Color.fromHSL(60, 45, 100).alpha(0.5);
```

## Color manipulation

### `red()`, `green()` and `blue()`

These methods set or get the RGB channel values, using values between 0 and
255.

```js
c.red(128).green(255).blue(0); // => c
c.red(); // => 128
```

### `hue()`, `saturation()` and `lightness()`

These methods set or get the HSL channel values, using values between 0 and
360 for the hue and between 0 and 100 for saturation and lightness.

```js
c.hue(0).saturation(100).lightness(50); // => c
c.hue(); // => 0
```

### `alpha()`

This method sets or gets the alpha channel value, using values between 0 and 1.

```js
c.alpha(0.25); // => c
c.alpha(); // => 0.25
```

### `shift*` methods

All the `shift` methods modify the value of the specified channel in place.

- `shiftHue(delta)`
- `shiftSaturation(delta)`
- `shiftLightness(delta)`
- `shiftRed(delta)`
- `shiftGreen(delta)`
- `shiftBlue(delta)`
- `shiftAlpha(delta)`

Each accepts a value to update the current one.

## Color mixing

The following methods combine a color with another. All accept a CSS string

### `mix(Color, strength)`

Mix a color into the current one to get a new color.

### `average(Color, strength)`

Mix a color into the current one to get a new color. This method updates the
saturation and lightness of the resulting color with the average of the
operands.

### `add(Color, strength)`

Add the RGB values of another color to the current one to get another color.

### `substract(Color, strength)`

Substract the RGB values of another color to the current one to get another
color.

## Phase functions

You can define functions that update color channels sequentially:

```js
let c1 = new Color("#66997a"),
    steps = 20;

c1.phase('lightness', function (value, phase) {
    return 50 + 50 * Math.sin(phase * Math.PI / 180);
}).phase('hue', function (value, phase) {
    return value + 10;
});

while (steps--) {
    console.log(c1.hex())
    c1 = c1.next();
}
```

<table>
    <tr>
        <td style="background-color: #66997a">&nbsp;</td>
        <td style="background-color: #699b85">&nbsp;</td>
        <td style="background-color: #6b9c8f">&nbsp;</td>
        <td style="background-color: #6e9e99">&nbsp;</td>
        <td style="background-color: #719da0">&nbsp;</td>
        <td style="background-color: #7497a2">&nbsp;</td>
        <td style="background-color: #7691a3">&nbsp;</td>
        <td style="background-color: #798ca5">&nbsp;</td>
        <td style="background-color: #7c87a7">&nbsp;</td>
        <td style="background-color: #7f83a9">&nbsp;</td>
        <td style="background-color: #8481aa">&nbsp;</td>
        <td style="background-color: #8d84ac">&nbsp;</td>
        <td style="background-color: #9687ae">&nbsp;</td>
        <td style="background-color: #9f89af">&nbsp;</td>
        <td style="background-color: #a78cb1">&nbsp;</td>
        <td style="background-color: #af8fb3">&nbsp;</td>
        <td style="background-color: #b491b2">&nbsp;</td>
        <td style="background-color: #b694ae">&nbsp;</td>
        <td style="background-color: #b897aa">&nbsp;</td>
        <td style="background-color: #b999a7">&nbsp;</td>
        <td style="background-color: #bb9ca4">&nbsp;</td>
        <td style="background-color: #bc9ea1">&nbsp;</td>
        <td style="background-color: #bea3a1">&nbsp;</td>
        <td style="background-color: #c0aaa3">&nbsp;</td>
        <td style="background-color: #c2b1a6">&nbsp;</td>
        <td style="background-color: #c3b7a8">&nbsp;</td>
        <td style="background-color: #c5beab">&nbsp;</td>
        <td style="background-color: #c6c4ad">&nbsp;</td>
        <td style="background-color: #c6c8b0">&nbsp;</td>
        <td style="background-color: #c4c9b2">&nbsp;</td>
        <td style="background-color: #c2cbb4">&nbsp;</td>
        <td style="background-color: #c0ccb6">&nbsp;</td>
        <td style="background-color: #beceb9">&nbsp;</td>
        <td style="background-color: #bdcfbb">&nbsp;</td>
        <td style="background-color: #bed1bf">&nbsp;</td>
        <td style="background-color: #c0d2c4">&nbsp;</td>
        <td style="background-color: #c2d3c9">&nbsp;</td>
        <td style="background-color: #c4d5ce">&nbsp;</td>
        <td style="background-color: #c6d6d2">&nbsp;</td>
        <td style="background-color: #c8d8d6">&nbsp;</td>
    </tr>
</table>

This is similar to calling the `shift` methods on the color, with the
advantage of accepting arbitrary transformations through a callback.

The `phase()` method accepts one of the color attributes (red, green, blue,
hue, saturation, lightness or alpha) and a callback. You can attach multiple
phase functions to a color object.

The callback will be called when the `next()` method is invoked in the color
object, passing the current value of the attribute and a *phase* that
indicates how many phase changes the color has gone through. The value of
`this` inside the callback will correspond to the color object.

## CSS Output

You can use the following methods to get CSS strings:

```js
c.hex();      // => '#f0553a'
c.rgb();      // => 'rgba(100, 120, 250)'
c.rgba();     // => 'rgba(0, 0, 0, 0.5)'
c.rgba(0.15); // => 'rgba(0, 0, 0, 0.15)'
c.hsl();      // => 'hsla(201, 90%, 67%)'
c.hsla();     // => 'hsla(125, 50%, 90%, 0.2)'
c.hsla(0.9);  // => 'hsla(125, 50%, 90%, 0.9)'
```
