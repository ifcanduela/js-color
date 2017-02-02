"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* @flow */
;(function (root) {
    "use strict";

    var color_names = {
        "black": "#000000",
        "silver": "#c0c0c0",
        "gray": "#808080",
        "white": "#ffffff",
        "maroon": "#800000",
        "red": "#ff0000",
        "purple": "#800080",
        "fuchsia": "#ff00ff",
        "green": "#008000",
        "lime": "#00ff00",
        "olive": "#808000",
        "yellow": "#ffff00",
        "navy": "#000080",
        "blue": "#0000ff",
        "teal": "#008080",
        "aqua": "#00ffff",
        "orange": "#ffa500",
        "aliceblue": "#f0f8ff",
        "antiquewhite": "#faebd7",
        "aquamarine": "#7fffd4",
        "azure": "#f0ffff",
        "beige": "#f5f5dc",
        "bisque": "#ffe4c4",
        "blanchedalmond": "#ffebcd",
        "blueviolet": "#8a2be2",
        "brown": "#a52a2a",
        "burlywood": "#deb887",
        "cadetblue": "#5f9ea0",
        "chartreuse": "#7fff00",
        "chocolate": "#d2691e",
        "coral": "#ff7f50",
        "cornflowerblue": "#6495ed",
        "cornsilk": "#fff8dc",
        "crimson": "#dc143c",
        "darkblue": "#00008b",
        "darkcyan": "#008b8b",
        "darkgoldenrod": "#b8860b",
        "darkgray": "#a9a9a9",
        "darkgreen": "#006400",
        "darkgrey": "#a9a9a9",
        "darkkhaki": "#bdb76b",
        "darkmagenta": "#8b008b",
        "darkolivegreen": "#556b2f",
        "darkorange": "#ff8c00",
        "darkorchid": "#9932cc",
        "darkred": "#8b0000",
        "darksalmon": "#e9967a",
        "darkseagreen": "#8fbc8f",
        "darkslateblue": "#483d8b",
        "darkslategray": "#2f4f4f",
        "darkslategrey": "#2f4f4f",
        "darkturquoise": "#00ced1",
        "darkviolet": "#9400d3",
        "deeppink": "#ff1493",
        "deepskyblue": "#00bfff",
        "dimgray": "#696969",
        "dimgrey": "#696969",
        "dodgerblue": "#1e90ff",
        "firebrick": "#b22222",
        "floralwhite": "#fffaf0",
        "forestgreen": "#228b22",
        "gainsboro": "#dcdcdc",
        "ghostwhite": "#f8f8ff",
        "gold": "#ffd700",
        "goldenrod": "#daa520",
        "greenyellow": "#adff2f",
        "grey": "#808080",
        "honeydew": "#f0fff0",
        "hotpink": "#ff69b4",
        "indianred": "#cd5c5c",
        "indigo": "#4b0082",
        "ivory": "#fffff0",
        "khaki": "#f0e68c",
        "lavender": "#e6e6fa",
        "lavenderblush": "#fff0f5",
        "lawngreen": "#7cfc00",
        "lemonchiffon": "#fffacd",
        "lightblue": "#add8e6",
        "lightcoral": "#f08080",
        "lightcyan": "#e0ffff",
        "lightgoldenrodyellow": "#fafad2",
        "lightgray": "#d3d3d3",
        "lightgreen": "#90ee90",
        "lightgrey": "#d3d3d3",
        "lightpink": "#ffb6c1",
        "lightsalmon": "#ffa07a",
        "lightseagreen": "#20b2aa",
        "lightskyblue": "#87cefa",
        "lightslategray": "#778899",
        "lightslategrey": "#778899",
        "lightsteelblue": "#b0c4de",
        "lightyellow": "#ffffe0",
        "limegreen": "#32cd32",
        "linen": "#faf0e6",
        "mediumaquamarine": "#66cdaa",
        "mediumblue": "#0000cd",
        "mediumorchid": "#ba55d3",
        "mediumpurple": "#9370db",
        "mediumseagreen": "#3cb371",
        "mediumslateblue": "#7b68ee",
        "mediumspringgreen": "#00fa9a",
        "mediumturquoise": "#48d1cc",
        "mediumvioletred": "#c71585",
        "midnightblue": "#191970",
        "mintcream": "#f5fffa",
        "mistyrose": "#ffe4e1",
        "moccasin": "#ffe4b5",
        "navajowhite": "#ffdead",
        "oldlace": "#fdf5e6",
        "olivedrab": "#6b8e23",
        "orangered": "#ff4500",
        "orchid": "#da70d6",
        "palegoldenrod": "#eee8aa",
        "palegreen": "#98fb98",
        "paleturquoise": "#afeeee",
        "palevioletred": "#db7093",
        "papayawhip": "#ffefd5",
        "peachpuff": "#ffdab9",
        "peru": "#cd853f",
        "pink": "#ffc0cb",
        "plum": "#dda0dd",
        "powderblue": "#b0e0e6",
        "rosybrown": "#bc8f8f",
        "royalblue": "#4169e1",
        "saddlebrown": "#8b4513",
        "salmon": "#fa8072",
        "sandybrown": "#f4a460",
        "seagreen": "#2e8b57",
        "seashell": "#fff5ee",
        "sienna": "#a0522d",
        "skyblue": "#87ceeb",
        "slateblue": "#6a5acd",
        "slategray": "#708090",
        "slategrey": "#708090",
        "snow": "#fffafa",
        "springgreen": "#00ff7f",
        "steelblue": "#4682b4",
        "tan": "#d2b48c",
        "thistle": "#d8bfd8",
        "tomato": "#ff6347",
        "turquoise": "#40e0d0",
        "violet": "#ee82ee",
        "wheat": "#f5deb3",
        "whitesmoke": "#f5f5f5",
        "yellowgreen": "#9acd32",
        "rebeccapurple": "#663399"
    };

    /**
     * Create a linear scaling function.
     *
     * Create a function that Interpolates a value in an output domain based on
     * a value in an input domain.
     *
     * The signature of the callback is f(outputValue, inputValue, inputDomain, outputDomain)
     *
     * @param {array} inputDomain - An array with lower and upper boundary
     * @param {array} outputDomain - An array with lower and upper boundary
     * @param {function} callback - A transformation to apply to the resulting value
     * @return {function}
     */
    function get_scale(inputDomain, outputDomain, callback) {
        var i_start = 0 - inputDomain[0];
        var i_end = inputDomain[1] - inputDomain[0];

        var o_start = 0 - outputDomain[0];
        var o_end = outputDomain[1] - outputDomain[0];

        return function (input) {
            var output = (input + i_start) / i_end * o_end - o_start;

            return typeof callback === "function" ? callback(output, input, inputDomain, outputDomain) : output;
        };
    }

    /**
     * Map a value in the 0.0 to 1.0 range to the 0 to 255 range.
     *
     * @param {float} input - The input value.
     * @return {int}
     */
    var to_255 = get_scale([0, 1], [0, 256], function (o, i) {
        return i == 1 ? 255 : Math.floor(o);
    });

    /**
     * Map a value in the 0 to 255 range to the 0.0 to 1.0 range.
     *
     * @param {int} input - The input value.
     * @return {float}
     */
    var from_255 = get_scale([0, 256], [0, 1], function (o, i) {
        return i >= 255 ? 1.0 : o;
    });

    /**
     * Obtain RGBA or HSLA values from a CSS string.
     *
     * @param {string} str - The CSS-formatted color.
     * @return {array}
     */
    function extract_definition_values(str) {
        var matches = str.match(/[a-z]{3,4}\(([^)]+)\)/);

        if (!matches || typeof matches[1] === "undefined") {
            throw "Malformed RGB(A) or HSL(A) string: \"" + str + "\"";
        }

        return matches[1].split(/,\s*/).map(function (n) {
            return parseFloat(n);
        });
    }

    /**
     * Split a hex color string into red, green, blue and alpha components.
     *
     * The R, G and B values returned range between 0 and 255, and the alpha value is a
     * floating-point number between 0 and 1.
     *
     * @param {string} hex - A 3, 4, 6 or 8 character-long CSS hex color.
     * @return {array} - An array with R, G, B and A values.
     */
    function split_hex(hex) {
        var red, green, blue, alpha;
        var h = hex.replace("#", "");

        if (h.length === 3 || h.length === 4) {
            var _h$match$map = h.match(/.{1}/g).map(function (n) {
                return parseInt(n + n, 16);
            });

            var _h$match$map2 = _slicedToArray(_h$match$map, 4);

            red = _h$match$map2[0];
            green = _h$match$map2[1];
            blue = _h$match$map2[2];
            alpha = _h$match$map2[3];
        } else if (h.length === 6 || h.length === 8) {
            var _h$match$map3 = h.match(/.{2}/g).map(function (n) {
                return parseInt(n, 16);
            });

            var _h$match$map4 = _slicedToArray(_h$match$map3, 4);

            red = _h$match$map4[0];
            green = _h$match$map4[1];
            blue = _h$match$map4[2];
            alpha = _h$match$map4[3];
        } else {
            throw "Malformed hex string: \"" + hex + "\"";
        }

        if (typeof alpha === "undefined") {
            alpha = 1;
        } else {
            alpha = from_255(alpha);
        }

        return [red, green, blue, alpha];
    }

    /**
     * Converts an 8-bit integer value to its hexadecimal representation.
     *
     * @param {integer} rgbValue - A value from 0 to 255
     * @param {integer} pad - An amount of hex digits to pad
     * @return {string} - A hexadecimal representation of the rgbValue
     */
    function to_hex(rgbValue, pad) {
        var hex = to_255(rgbValue, 16).toString(16);

        pad = pad || 2;

        return ("0000000000" + hex).slice(-pad);
    }

    /**
     * Converts hue, saturation and lightness to red, green and blue.
     *
     * <http://en.wikipedia.org/wiki/HSL_and_HSV#From_HSL>
     *
     * @param {float} hue - Hue value (0-1)
     * @param {float} saturation - Saturation value (0-1)
     * @param {float} value - Lightness value (0-1)
     * @return {object} - Object with red, green and blue properties (0-1)
     */
    function hsl_to_rgb(hue, saturation, lightness) {
        var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
        var lower_hue = Math.round(hue * 360) / 60;
        var x = chroma * (1 - Math.abs(lower_hue % 2 - 1));
        var r, g, b;

        if (lower_hue >= 0 && lower_hue < 1) {
            r = chroma;
            g = x;
            b = 0;
        } else if (lower_hue >= 1 && lower_hue < 2) {
            r = x;
            g = chroma;
            b = 0;
        } else if (lower_hue >= 2 && lower_hue < 3) {
            r = 0;
            g = chroma;
            b = x;
        } else if (lower_hue >= 3 && lower_hue < 4) {
            r = 0;
            g = x;
            b = chroma;
        } else if (lower_hue >= 4 && lower_hue < 5) {
            r = x;
            g = 0;
            b = chroma;
        } else if (lower_hue >= 5 && lower_hue < 6) {
            r = chroma;
            g = 0;
            b = x;
        } else {
            r = 0;
            g = 0;
            b = 0;
        }

        var luma = lightness - 0.5 * chroma;

        return {
            "red": r + luma,
            "green": g + luma,
            "blue": b + luma
        };
    }

    /**
     * Converts red, green and blue to hue, saturation and lightness.
     *
     * @param {float} red - Red value (0-1)
     * @param {float} green - Green value (0-1)
     * @param {float} blue - Blue value (0-1)
     * @return {object} - Object with hue, saturation and value properties (0-1);
     */
    function rgb_to_hsl(red, green, blue) {
        var rgb = [red, green, blue];

        var hue, saturation, lightness;

        var c_max = Math.max.apply(root, rgb);
        var c_min = Math.min.apply(root, rgb);
        var dominant = rgb.indexOf(c_max);
        var delta = c_max - c_min;

        // calculate lightness
        lightness = (c_max + c_min) / 2;

        // calculate saturation
        if (delta === 0) {
            saturation = 0;
        } else if (lightness < 0.5) {
            saturation = delta / (c_max + c_min);
        } else {
            saturation = delta / (2 - c_max - c_min);
        }

        // calculate hue
        if (delta === 0) {
            hue = 0;
        } else {
            var delta_red = ((c_max - rgb[0]) / 6 + delta / 2) / delta;
            var delta_green = ((c_max - rgb[1]) / 6 + delta / 2) / delta;
            var delta_blue = ((c_max - rgb[2]) / 6 + delta / 2) / delta;

            if (dominant === 0) {
                hue = delta_blue - delta_green;
            } else if (dominant === 1) {
                hue = 1 / 3 + delta_red - delta_blue;
            } else if (dominant === 2) {
                hue = 2 / 3 + delta_green - delta_red;
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
            "lightness": lightness
        };
    }

    /**
     * Ensures a number falls within a certain range.
     *
     * @param {number} value - Value to check
     * @param {number} min - Minimum accepted value
     * @param {number} max - Maximum accepted value
     * @return {number} - Clamped value
     */
    function clamp(value, min, max) {
        min = typeof min === "undefined" ? 0 : min;
        max = typeof max === "undefined" ? 1 : max;

        return Math.min(Math.max(value, min), max);
    }

    /**
     * Build a color.
     *
     * @constructor
     * @param {integer} red - Red value (0-255)
     * @param {integer} green - Green value (0-255)
     * @param {integer} blue - Blue value (0-255)
     * @param {float} alpha - Alpha value (0-1)
     */
    function Color(r, g, b, a) {
        if (typeof color_names[r] !== "undefined") {
            r = color_names[r];
        }

        if (typeof r === "string") {
            var str = r;

            if (str[0] === "#") {
                var _split_hex = split_hex(r);

                var _split_hex2 = _slicedToArray(_split_hex, 4);

                r = _split_hex2[0];
                g = _split_hex2[1];
                b = _split_hex2[2];
                a = _split_hex2[3];
            } else if (str.substring(0, 3) === "rgb") {
                var m = extract_definition_values(str);

                var _m = _slicedToArray(m, 3);

                r = _m[0];
                g = _m[1];
                b = _m[2];


                if (str.substring(0, 4) === "rgba") {
                    a = m[3];
                }
            } else if (str.substring(0, 3) === "hsl") {
                var _m2 = extract_definition_values(str);
                var rgb = hsl_to_rgb(_m2[0] / 360, _m2[1] / 100, _m2[2] / 100);

                var _map = [rgb.red, rgb.green, rgb.blue].map(to_255);

                var _map2 = _slicedToArray(_map, 3);

                r = _map2[0];
                g = _map2[1];
                b = _map2[2];


                if (str.substring(0, 4) === "hsla") {
                    a = parseFloat(_m2[3]);
                }
            }
        }

        a = typeof a === "undefined" ? 1.0 : a;

        this._red = from_255(r) || 0;
        this._green = from_255(g) || 0;
        this._blue = from_255(b) || 0;
        this._alpha = a;

        this.updateHsl();

        this.phaseFunctions = {};
        this.currentPhase = 0;
    }

    /**
     * Creates a random color.
     *
     * @static
     * @return {Color}
     */
    Color.random = function () {
        var r = function r() {
            return Math.floor(Math.random() * 256);
        };

        return new Color(r(), r(), r());
    };

    /**
     * Creates a color with the specified red, green and blue values.
     *
     * @static
     * @param {integer} r - Red value, between 0 and 255
     * @param {integer} g - Green value, between 0 and 255
     * @param {integer} b - Blue value, between 0 and 255
     * @return {Color}
     */
    Color.fromRGB = function (r, g, b, a) {
        return new Color(r, g, b, a);
    };

    /**
     * Creates a color with the specified hue, saturation and lightness values.
     *
     * @static
     * @param {integer} h - Hue value, between 0 and 360
     * @param {integer} s - Saturation value, between 0 and 100
     * @param {integer} l - Lightness value, between 0 and 100
     * @return {Color}
     */
    Color.fromHSL = function (h, s, l, a) {
        var c = new Color("#ffffff");

        c.hue(h);
        c.saturation(s);
        c.lightness(l);
        c.alpha(typeof a === "undefined" ? 1.0 : a);

        return c;
    };

    /**
     * Creates a color from a CSS string.
     *
     * @static
     * @param {string} str - Any valid CSS-formatted color.
     * @return {Color}
     */
    Color.fromString = function (str) {
        return new Color(str);
    };

    /**
     * Internal function to update the RBG values after the HSL values have
     * been set.
     */
    Color.prototype.updateRgb = function () {
        var rgb = hsl_to_rgb(this._hue, this._saturation, this._lightness);

        this._red = rgb.red;
        this._green = rgb.green;
        this._blue = rgb.blue;
    };

    /**
     * Internal function to update the HSL values after the RGB values have
     * been set.
     */
    Color.prototype.updateHsl = function () {
        var hsl = rgb_to_hsl(this._red, this._green, this._blue);

        this._hue = hsl.hue;
        this._saturation = hsl.saturation;
        this._lightness = hsl.lightness;
    };

    /**
     * Get or set the red value of the color.
     *
     * @param {int} val - New value of the red attribute.
     * @return {int|Color} - The color object is returned when calling this method as a setter.
     */
    Color.prototype.red = function (red) {
        if (typeof red !== "undefined") {
            this._red = clamp(from_255(red));
            this.updateHsl();

            return this;
        }

        return to_255(this._red);
    };

    /**
     * Get or set the green value of the color.
     *
     * @param {int} val - New value of the green attribute.
     * @return {int|Color} - The color object is returned when calling this method as a setter.
     */
    Color.prototype.green = function (green) {
        if (typeof green !== "undefined") {
            this._green = clamp(from_255(green));
            this.updateHsl();

            return this;
        }

        return to_255(this._green);
    };

    /**
     * Get or set the blue value of the color.
     *
     * @param {int} val - New value of the blue attribute.
     * @return {int|Color} - The color object is returned when calling this method as a setter.
     */
    Color.prototype.blue = function (blue) {
        if (typeof blue !== "undefined") {
            this._blue = clamp(from_255(blue));
            this.updateHsl();

            return this;
        }

        return to_255(this._blue);
    };

    /**
     * Get or set the hue value of the color.
     *
     * @param {int} val - New value of the hue attribute.
     * @return {int|Color} - The color object is returned when calling this method as a setter.
     */
    Color.prototype.hue = function (hue) {
        if (typeof hue !== "undefined") {
            this._hue = clamp(hue % 360 / 360);
            this.updateRgb();

            return this;
        }

        return Math.round(this._hue * 360);
    };

    /**
     * Get or set the saturation value of the color.
     *
     * @param {int} val - New value of the saturation attribute.
     * @return {int|Color} - The color object is returned when calling this method as a setter.
     */
    Color.prototype.saturation = function (saturation) {
        if (typeof saturation !== "undefined") {
            this._saturation = clamp(saturation / 100);
            this.updateRgb();

            return this;
        }

        return Math.round(this._saturation * 100);
    };

    /**
     * Get or set the lightness value of the color.
     *
     * @param {int} val - New value of the lightness attribute.
     * @return {int|Color} - The color object is returned when calling this method as a setter.
     */
    Color.prototype.lightness = function (lightness) {
        if (typeof lightness !== "undefined") {
            this._lightness = clamp(lightness / 100);
            this.updateRgb();

            return this;
        }

        return Math.round(this._lightness * 100);
    };

    /**
     * Get or set the alpha value of the color.
     *
     * @param {float} val - New value of the alpha attribute.
     * @return {float|Color} - The color object is returned when calling this method as a setter.
     */
    Color.prototype.alpha = function (alpha) {
        if (typeof alpha !== "undefined") {
            this._alpha = clamp(alpha);

            return this;
        }

        return this._alpha;
    };

    /**
     * Get the chroma value of the color.
     *
     * @return {number}
     */
    Color.prototype.chroma = function () {
        return (1 - Math.abs(2 * this._lightness - 1)) * this._saturation;
    };

    /**
     * Get the luma value of the color.
     *
     * @return {number}
     */
    Color.prototype.luma = function () {
        return this._lightness - 0.5 * this.chroma();
    };

    /**
     * Increase or decrease the value of the red attribute by an amount.
     *
     * @param {int} delta
     * @return {Color}
     */
    Color.prototype.shiftRed = function (delta) {
        this.set(this.red() + delta);

        return this;
    };

    /**
     * Increase or decrease the value of the green attribute by an amount.
     *
     * @param {int} delta
     * @return {Color}
     */
    Color.prototype.shiftGreen = function (delta) {
        this.green(this.green() + delta);

        return this;
    };

    /**
     * Increase or decrease the value of the blue attribute by an amount.
     *
     * @param {int} delta
     * @return {Color}
     */
    Color.prototype.shiftBlue = function (delta) {
        this.blue(this.blue() + delta);

        return this;
    };

    /**
     * Increase or decrease the value of the hue attribute by an amount.
     *
     * @param {int} delta
     * @return {Color}
     */
    Color.prototype.shiftHue = function (delta) {
        this.hue(this.hue() + delta);

        return this;
    };

    /**
     * Increase or decrease the value of the saturation attribute by an amount.
     *
     * @param {int} delta
     * @return {Color}
     */
    Color.prototype.shiftSaturation = function (delta) {
        this.saturation(this.saturation() + delta);

        return this;
    };

    /**
     * Increase or decrease the value of the lightness attribute by an amount.
     *
     * @param {int} delta
     * @return {Color}
     */
    Color.prototype.shiftLightness = function (delta) {
        this.lightness(this.lightness() + delta);

        return this;
    };

    /**
     * Increase or decrease the alpha value by an amount.
     *
     * @param {float} delta
     * @return {Color}
     */
    Color.prototype.shiftAlpha = function (delta) {
        this.alpha(this.alpha() + delta);

        return this;
    };

    /**
     * Set the red, green and blue values.
     *
     * @param {int} red
     * @param {int} green
     * @param {int} blue
     * @return {Color}
     */
    Color.prototype.setRGB = function (red, green, blue) {
        this._red = clamp(from_255(red));
        this._green = clamp(from_255(green));
        this._blue = clamp(from_255(blue));
        this.updateHsl();

        return this;
    };

    /**
     * Set the hue, saturation and lightness values.
     *
     * @param {int} hue
     * @param {int} saturation
     * @param {int} lightness
     * @return {Color}
     */
    Color.prototype.setHSL = function (hue, saturation, lightness) {
        this._hue = clamp(hue % 360 / 360);
        this._saturation = clamp(saturation / 100);
        this._lightness = clamp(lightness / 100);
        this.updateRgb();

        return this;
    };

    /**
     * Mix a color into another.
     *
     * A weight of 0 will return the new color and a weight of 100 will return
     * the original color.
     *
     * This function returns a new Color object.
     *
     * @param {Color|string} color - Color to mix into the current
     * @param {number} weight - A value between 0 and 50 to balance the mix
     * @return {Color}
     */
    Color.prototype.mix = function (color) {
        var weight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

        if (typeof color === "string") {
            color = new Color(color);
        }

        if (!(color instanceof Color)) {
            throw "Color.mix() requires a string or an instance of Color";
        }

        var w = weight / 100;
        var _w = 1 - w;

        var red = this._red * w + color._red * _w;
        var green = this._green * w + color._green * _w;
        var blue = this._blue * w + color._blue * _w;
        var alpha = this._alpha * w + color._alpha * _w;

        return new Color(to_255(red), to_255(green), to_255(blue), alpha);
    };

    /**
     * Mix a color into another, averaging saturation and lightness.
     *
     * A weight of 0 will return the new color and a weight of 100 will return
     * the original color.
     *
     * @param {Color|string} color - Color to mix into the current
     * @param {number} weight - A value between 0 and 50 to balance the mix
     * @return {Color}
     */
    Color.prototype.average = function (color) {
        var weight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

        if (typeof color === "string") {
            color = new Color(color);
        }

        if (!(color instanceof Color)) {
            throw "Color.average() requires a string or an instance of Color";
        }

        var w = weight / 100;
        var _w = 1 - w;

        var target_saturation = this._saturation * w + color._saturation * _w;
        var target_lightness = this._lightness * w + color._lightness * _w;

        var red = this._red * w + color._red * _w;
        var green = this._green * w + color._green * _w;
        var blue = this._blue * w + color._blue * _w;
        var alpha = this._alpha * w + color._alpha * _w;

        var result = new Color(to_255(red), to_255(green), to_255(blue), alpha);

        result._saturation = target_saturation;
        result._lightness = target_lightness;
        result.updateRgb();

        return result;
    };

    /**
     * Add a color to another.
     *
     * @param {Color|string} color
     * @param {number} strength
     * @return {Color}
     */
    Color.prototype.add = function (color, strength) {
        if (typeof color === "string") {
            color = new Color(color);
        }

        if (!(color instanceof Color)) {
            throw "Color.add() requires a string or an instance of Color";
        }

        if (typeof strength !== "number") {
            strength = 1.0;
        }

        var red = clamp(this._red + color._red * strength);
        var green = clamp(this._green + color._green * strength);
        var blue = clamp(this._blue + color._blue * strength);

        return new Color(to_255(red), to_255(green), to_255(blue), this._alpha);
    };

    /**
     * Substract a color from another.
     *
     * @param {Color|string} color
     * @param {number} strength
     * @return {Color}
     */
    Color.prototype.substract = function (color, strength) {
        if (typeof color === "string") {
            color = new Color(color);
        }

        if (!(color instanceof Color)) {
            throw "Color.substract() requires a string or an instance of Color";
        }

        if (typeof strength !== "number") {
            strength = 1.0;
        }

        var red = clamp(this._red - color._red * strength);
        var green = clamp(this._green - color._green * strength);
        var blue = clamp(this._blue - color._blue * strength);

        return new Color(to_255(red), to_255(green), to_255(blue), this._alpha);
    };

    /**
     * Get a copy of the current color.
     *
     * @return {Color}
     */
    Color.prototype.clone = function () {
        var c = new Color(this.red(), this.green(), this.blue());

        c.alpha(this.alpha());

        c.phaseFunctions = this.phaseFunctions;
        c.currentPhase = this.currentPhase;

        return c;
    };

    /**
     * Get the color value in CSS hex format.
     *
     * @return {string}
     */
    Color.prototype.hex = function () {
        return "#" + to_hex(this._red) + to_hex(this._green) + to_hex(this._blue);
    };

    /**
     * Get the color value in CSS rgb format.
     *
     * @return {string}
     */
    Color.prototype.rgb = function () {
        return "rgb(" + to_255(this._red) + ", " + to_255(this._green) + ", " + to_255(this._blue) + ")";
    };

    /**
     * Get the color value in CSS rgba format.
     *
     * @param {float} alpha - A value between 0 and 1 to override the current alpha value of the color.
     * @return {string}
     */
    Color.prototype.rgba = function (alpha) {
        if (typeof alpha === "undefined") {
            alpha = this._alpha;
        }

        return "rgba(" + to_255(this._red) + ", " + to_255(this._green) + ", " + to_255(this._blue) + ", " + alpha + ")";
    };

    /**
     * Get the color value in CSS hsl format.
     *
     * @return {string}
     */
    Color.prototype.hsl = function () {
        return "hsl(" + parseInt(this._hue * 360) + ", " + parseInt(this._saturation * 100) + "%, " + parseInt(this._lightness * 100) + "%)";
    };

    /**
     * Get the color value in CSS hsla format.
     *
     * @param {float} alpha - A value between 0 and 1 to override the current alpha value of the color.
     * @return {string}
     */
    Color.prototype.hsla = function (alpha) {
        if (typeof alpha === "undefined") {
            alpha = this._alpha;
        }

        return "hsla(" + parseInt(this._hue * 360) + ", " + parseInt(this._saturation * 100) + "%, " + parseInt(this._lightness * 100) + "%, " + alpha + ")";
    };

    /**
     * Obtain a string representation of the color, in CSS rgba() format.
     *
     * @return {string}
     */
    Color.prototype.toString = function () {
        return this.rgba();
    };

    /**
     * Attach a function to manipulate a color attribute in each phase change.
     *
     * The color attributes are red, green, blue, hue, saturation, lightness and alpha.
     *
     * The signature of the callback is f(currentValue, phase)
     *
     * For red, green and blue, currentValue is in the range from 0 to 255.
     * For hue, currentValue is in the range from 0 to 360
     * For saturation and lightness, currentValue is in the range from 0 to 100
     * For alpha, currentValue is a float in the range from 0 to 1
     *
     * @param {string} attr - One of the color attrbutes
     * @param {function} callback - Callback to modifiy the attribute
     * @return {Color}
     */
    Color.prototype.phase = function (attr, callback) {
        this.phaseFunctions[attr] = callback;

        return this;
    };

    /**
     * Get the next color in the phase sequence.
     *
     * @param {Anything} phase - An override phase value for the phase function
     * @return {Color}
     */
    Color.prototype.next = function (phase) {
        var result = this.clone();

        phase = typeof phase === "undefined" ? this.currentPhase : phase;

        for (var attr in this.phaseFunctions) {
            var f = this.phaseFunctions[attr];
            var v = this[attr]();
            var a = f.call(this, v, phase);

            result[attr](a);
        }

        result.currentPhase++;

        return result;
    };

    if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object") {
        module.exports = Color;
        module.exports.getScale = get_scale;
    } else {
        root.Color = Color;
        root.Color.getScale = get_scale;
    }
})(undefined);