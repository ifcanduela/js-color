/**
 * Build a color.
 * 
 * @param {Number}  r       Red value (0-255)
 * @param {Number}  green   Green value (0-255)
 * @param {Number}  blue    Blue value (0-255)
 */
var Color = function (r, g, b) {
    // some constants for color indexes
    var RED = 0,
        GREEN = 1,
        BLUE = 2;

    if (typeof r === 'string') {
        if (r[0] === '#') {
            // hex string
            if (r.length === 4) {
                r_str = r.substring(1, 2) + r.substring(1, 2);
                g_str = r.substring(2, 3) + r.substring(2, 3);
                b_str = r.substring(3, 4) + r.substring(4, 4);
            } else {
                r_str = r.substring(1, 3);
                g_str = r.substring(3, 5);
                b_str = r.substring(5, 7);
            }

            r = parseInt(r_str, 16);
            g = parseInt(g_str, 16);
            b = parseInt(b_str, 16);
        } else if (r.substring(0, 3) === 'rgb') {
            // rgb() string
            var m = r.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);
            r = parseInt(m[1]);
            g = parseInt(m[2]);
            b = parseInt(m[3]);
        } else if (r.substring(0, 3) === 'hsl') {
            // hsl() string
            var m = r.match(/hsl\(\s*(\d+)\s*,\s*(\d+)%?\s*,\s*(\d+)%?\s*\)/);
            var rgb = hslToRgb(m[1] / 360, m[2] / 100, m[3] / 100);
            r = 100 * rgb.red;
            b = 100 * rgb.green;
            g = 100 * rgb.blue;
        }
    } else {
        // make sure we start with some values
        r = r || 0;
        g = g || 0;
        b = b || 0;
    }

    // convert the constructor arguments to internal floating-point values
    this.red    = r / 255;
    this.green  = g / 255;
    this.blue   = b / 255;

    // convert the initial color values to HSL values
    var hsl = rgbToHsl(this.red, this.green, this.blue);

    this.hue = hsl.hue;
    this.saturation = hsl.saturation;
    this.lightness = hsl.lightness;

    /**
     * Converts hue, saturation and lightness to red, green and blue.
     * 
     * <http://en.wikipedia.org/wiki/HSL_and_HSV#From_HSL>
     * 
     * @param  {Number}  hue         Hue value (0-1)
     * @param  {Number}  saturation  Saturation value (0-1)
     * @param  {Number}  value       Lightness value (0-1)
     * @return {Object}              Object with red, green and blue properties (0-1)
     */
    function hslToRgb(hue, saturation, lightness) {
        var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
        var lower_hue = Math.round(hue * 360) / 60;
        var x = chroma * (1 - Math.abs(lower_hue % 2 - 1));
        var val = [];

        if (lower_hue >= 0 && lower_hue < 1) {
            val = [chroma, x, 0];
        } else if (lower_hue >= 1 && lower_hue < 2) {
            val = [x, chroma, 0];
        } else if (lower_hue >= 2 && lower_hue < 3) {
            val = [0, chroma, x];
        } else if (lower_hue >= 3 && lower_hue < 4) {
            val = [0, x, chroma];
        } else if (lower_hue >= 4 && lower_hue < 5) {
            val = [x, 0, chroma];
        } else if (lower_hue >= 5 && lower_hue < 6) {
            val = [chroma, 0, x];
        } else {
            val = [0, 0, 0];
        }

        var luma = lightness - 0.5 * chroma;

        return {
            "red": val[RED] + luma,
            "green": val[GREEN] + luma,
            "blue": val[BLUE] + luma,
        }
    }

    /**
     * Converts red, green and blue to hue, saturation and lightness.
     * 
     * @param  {Number}  red     Red value (0-1)
     * @param  {Number}  green   Green value (0-1)
     * @param  {Number}  blue    Blue value (0-1)
     * @return {Object}          Object with hue, saturation and value properties (0-1);
     */
    function rgbToHsl(red, green, blue) {
        var rgb = [red, green, blue];

        var hue, saturation, lightness;

        var c_max = Math.max.apply(window, rgb);
        var c_min = Math.min.apply(window, rgb);
        var dominant = rgb.indexOf(c_max);
        var delta = c_max - c_min;

        // calculate lightness
        lightness = (c_max + c_min) / 2;

        // calculate saturation
        if (delta == 0) {
            saturation = 0;
        } else if (lightness < 0.5) {
                saturation = delta / (c_max + c_min)
        } else {
            saturation = delta / (2 - c_max - c_min);
        }

        // calculate hue
        if (delta == 0) {
            hue = 0;
        } else {
            var delta_red = (((c_max - rgb[RED]) / 6) + delta / 2) / delta;
            var delta_green = (((c_max - rgb[GREEN]) / 6) + delta / 2) / delta;
            var delta_blue = (((c_max - rgb[BLUE]) / 6) + delta / 2) / delta;

            if (dominant == RED) {
                hue = delta_blue - delta_green;
            } else if (dominant == GREEN) {
                hue = (1 / 3) + delta_red - delta_blue;
            } else if (dominant == BLUE) {
                hue = (2 / 3) + delta_green - delta_red;
            } else {
                hue = 0;
            }

            if (hue < 0) {
                hue += 1;
            } else if (hue > 1) {
                hue -= 1;
            }
        }

        return {
            "hue": hue,
            "saturation": saturation,
            "lightness": lightness,
        }
    }

    /**
     * Converts a floating-point RGB value to the Hex scale (0-255).
     * 
     * @param  {Number}  rgbValue A value from 0 to 1
     * @return {Number}           A value from 0 to 255
     */
    function to255(rgbValue) {
        return Math.floor(rgbValue * 255);
    }

    /**
     * Converts an 8-bit integer value to its hexadecimal representation.
     * 
     * @param  {Number} rgbValue A value from 0 to 255
     * @return {String}          A hexadecimal representation of the rgbValue
     */
    function toHex(rgbValue, pad) {
        var pad = pad || 2;
        var hex = to255(rgbValue, 16).toString(16);
        return ('0000000000' + hex).slice(-pad);
    }

    /**
     * Ensures a number falls within a certain range.
     * 
     * @param  {Number} value Value to check
     * @param  {Number} min   Minimum accepted value
     * @param  {Number} max   Maximum accepted value
     * @return {Number}       Clamped value
     */
    function clamp(value, min, max) {
        min = (typeof min === 'undefined') ? 0 : min;
        max = (typeof max === 'undefined') ? 1 : max;
        return Math.min(Math.max(value, min), max);
    }

    this.updateRgb = function () {
        var rgb = hslToRgb(this.hue, this.saturation, this.lightness);

        this.red = rgb.red;
        this.green = rgb.green;
        this.blue = rgb.blue;
    }

    this.updateHsl = function () {
        var hsl = rgbToHsl(this.red, this.green, this.blue);

        this.hue = hsl.hue;
        this.saturation = hsl.saturation;
        this.lightness = hsl.lightness;
    }

    /**
     * Update the HSL hue.
     * 
     * @param {int} hue An integer from 0 to 360
     */
    this.setHue = function (hue) {
        this.hue = clamp(hue % 360 / 360);
        this.updateRgb();
    };

    /**
     * Update the HSL saturation.
     * 
     * @param {int} saturation An integer from 0 to 100
     */
    this.setSaturation = function (saturation) {
        this.saturation = clamp(saturation / 100);
        this.updateRgb();
    };

    /**
     * Update the HSL lightness.
     * 
     * @param {int} lightness An integer from 0 to 100
     */
    this.setLightness = function (lightness) {
        this.lightness = clamp(lightness / 100);
        this.updateRgb();
    };

    /**
     * Update the RGB red.
     * 
     * @param {int} red An integer from 0 to 255
     */
    this.setRed = function (red) {
        this.red = clamp(red / 255);
        this.updateHsl();
    };

    /**
     * Update the RGB green.
     * 
     * @param {int} green An integer from 0 to 255
     */
    this.setGreen = function (green) {
        this.green = clamp(green / 255);
        this.updateHsl();
    };

    /**
     * Update the RGB blue.
     * 
     * @param {int} blue An integer from 0 to 255
     */
    this.setBlue = function (blue) {
        this.blue = clamp(blue / 255);
        this.updateHsl();
    };

    /**
     * Get the HSL hue.
     * 
     * @return {int} An integer from 0 to 360
     */
    this.getHue = function () {
        return Math.round(this.hue * 360);
    };

    /**
     * Get the HSL saturation.
     * 
     * @return {int} An integer from 0 to 100
     */
    this.getSaturation = function () {
        return Math.round(this.saturation * 100);
    };

    /**
     * Get the HSL lightness.
     * 
     * @return {int} An integer from 0 to 100
     */
    this.getLightness = function () {
        return Math.round(this.lightness * 100);
    };

    /**
     * Get the RGB red.
     * 
     * @return {int} An integer from 0 to 255
     */
    this.getRed = function () {
        return Math.round(this.red * 255);
    };

    /**
     * Get the RGB green.
     * 
     * @return {int} An integer from 0 to 255
     */
    this.getGreen = function () {
        return Math.round(this.green * 255);
    };

    /**
     * Get the RGB blue.
     * 
     * @return {int} An integer from 0 to 255
     */
    this.getBlue = function () {
        return Math.round(this.blue * 255);
    };

    this.setRGB = function (red, green, blue) {
        this.red = clamp(red / 255);
        this.green = clamp(green / 255);
        this.blue = clamp(blue / 255);
        this.updateHsl();
    };

    this.setHSL = function (hue, saturation, lightness) {
        this.hue = clamp(hue % 360 / 360);
        this.saturation = clamp(saturation / 100);
        this.lightness = clamp(lightness / 100);
        this.updateRgb();
    };

    this.clone = function () {
        var c = new Color(
            this.getRed(), 
            this.getGreen(), 
            this.getBlue()
        );

        return c;
    };

    /**
     * Get the color value in different formats
     */

    this.getCssHex = function () {
        return "#" + toHex(this.red) + toHex(this.green) + toHex(this.blue);
    };

    this.getCssHsl = function () {
        return "hsl(" + parseInt(this.hue * 360) + ", " + parseInt(this.saturation * 100) + "%, " + parseInt(this.lightness * 100) + "%)";
    };

    this.getCssHsla = function (alpha) {
        return "hsl(" + parseInt(this.hue * 360) + ", " + parseInt(this.saturation * 100) + "%, " + parseInt(this.lightness * 100) + "%, " + alpha + ")";
    };

    this.getCssRgb = function () {
        return "rgb(" + to255(this.red) + ", " + to255(this.green) + ", " + to255(this.blue) + ")";
    };

    this.getCssRgba = function (alpha) {
        return "rgb(" + to255(this.red) + ", " + to255(this.green) + ", " + to255(this.blue) + ", " + alpha + ")";
    };
};
