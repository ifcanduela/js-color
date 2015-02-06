# Color.js

## Usage

Colors can be created by calling the `Color` function with `new` and either a CSS color string or three 
integer values for the red, green and blue channels:

```js
var redColor    = new Color(255, 0, 0);
var greenColor  = new Color('#0f0');
var blueColor   = new Color('#0000FF');
var yellowColor = new Color('rgb(255, 255, 0)');
var aquaColor   = new Color('hls(190, 90%, 85%)');
```

From then on you can use the setter and getter methods for red, green, blue, hue, saturation and lightness 
to modify the color, and the `getCss*` methods (see below) to get the current color in a CSS-friendly string.

## Interface

### RGB channels

#### `setRGB(red, gree, blue)`

Update all three RGB values. The three parameters are red, green and blue channel values between 0 to 255.

#### `setRed(red)`, `setGreen(green)`,  `setBlue(blue)`

These three methods accept an integer from `0` to `255` and update the respective RGB channel.

#### `getRed()`, `getGreen`, `getBlue`

Retrieve the current value for the respective RGB channel as an integer from 0 to 255.

### HSL channels

#### `setHSL`

Update the Hue, Saturation and Lightness of the color. The Hue is an integer between 0 and 360, while the
Saturation and Lightness are integers between 0 and 100.

#### `setHue(hue)`

Update the Hue value of the color. Any integer is a valid value, but they are converted to 
the 0-360 range (with 0 and 360 being in practice the same hue).

#### `setSaturation(saturation)`, `setLightness(lightness)`

Update the Saturation and Lightness values of the color. Valid values are integers between 0 and 100.

#### `getHue()`

Retrieve the current Hue value of the color. Returns an integer between 0 and 360 (with 0 and 360 
being in practice the same hue).

#### `getSaturation()`,  `getLightness()`

Retrieve the Saturation and Lightness values of the color. The return value is an integer from 0 to 100.


### CSS Output

#### `getCssHex()`

Returns a string in the format `#RRGGBB`.

#### `getCssRgb()`

Returns a string in the format `rgba(rrr, ggg, bbb)`.

#### `getCssRgba(alpha)`

Returns a string in the format `rgba(rrr, ggg, bbb, a.a)`, where `alpha` is a floating-point
number between 0.0 and 1.0.

#### `getCssHsl()`

Returns a string in the format `hsl(hhh, sss%, lll%)`.

#### `getCssHsla(alpha)`

Returns a string in the format `hsla(hhh, sss%, lll%, a.a)`, where `alpha` is a floating-point
number between 0.0 and 1.0.

### Helpers

#### `clone`

Create a new Color with the same values and the current one.

