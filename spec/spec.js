var Color = require('../src/color.js');
var getScale = Color.getScale;

describe("The getScale factory function", function() {
    it("should map simple scales", function() {
        var scale_up = getScale([0, 1], [0, 100], Math.round);
        expect(scale_up(0)).toEqual(0);
        expect(scale_up(1)).toEqual(100);
        expect(scale_up(0.5)).toEqual(50);
        expect(scale_up(0.75)).toEqual(75);

        var scale_down = getScale([0, 100], [0, 1]);
        expect(scale_down(0)).toEqual(0);
        expect(scale_down(100)).toEqual(1);
        expect(scale_down(50)).toEqual(0.5);
        expect(scale_down(75)).toEqual(0.75);
    });

    it("should map to negative values", function() {
        var scale = getScale([0, 10], [-1, 1]);

        expect(scale(0)).toEqual(-1);
        expect(scale(1)).toEqual(-0.8);
        expect(scale(5)).toEqual(0);
        expect(scale(9)).toEqual(0.8);
        expect(scale(10)).toEqual(1);
    });

    it("should map values out of range", function() {
        var scale = getScale([0, 10], [0, 100]);

        expect(scale(0)).toEqual(0);
        expect(scale(10)).toEqual(100);
        expect(scale(100)).toEqual(1000);
        expect(scale(-100)).toEqual(-1000);
    });
});

describe("The to255 scale function", function () {
    var to255 = getScale([0, 1], [0, 256], (o, i) => i == 1 ? 255 : Math.floor(o));

    it("should calculate correctly for boundary values", function() {
        expect(to255(0)).toEqual(0);
        expect(to255(1)).toEqual(255);
    });

    it("should calculate correctly for intermediate values", function() {
        expect(to255(0.5)).toEqual(128);
        expect(to255(0.99)).toEqual(253);
    });
});

describe("The from255 scale function", function () {
    var from255 = getScale([0, 256], [0, 1], (v, o) => (o >= 255) ?  1.0 : v);

    it("should calculate correctly for boundary values", function() {
        expect(from255(0)).toEqual(0);
        expect(from255(255)).toEqual(1);
    });

    it("should calculate correctly for the middle value", function() {
        expect(from255(128)).toEqual(0.5);
    });
});

describe("The Color constructor", function() {
    it("should accept CSS color names", function() {
        var c1 = new Color('aliceblue');
        expect(c1.hex()).toEqual('#f0f8ff');

        var c2 = new Color('rebeccapurple');
        expect(c2.hex()).toEqual('#663399');
    });

    it("should accept CSS hex values", function() {
        var c1 = new Color('#F00');
        expect(c1.red()).toEqual(255);

        var c2 = new Color('#00FF0080');
        expect(c2.alpha()).toEqual(0.5);
    });

    it("should accept CSS rgb(a) values", function() {
        var c1 = new Color('rgba(255, 0, 0, 1)');
        expect(c1.alpha()).toEqual(1);

        var c2 = new Color('rgb(0, 255, 0)');
        expect(c2.hex()).toEqual('#00ff00');
    });

    it("should accept CSS hsl(a) values", function() {
        var c1 = new Color('hsl(120, 100%, 50%)');
        expect(c1.hex()).toEqual('#00ff00');

        var c1 = new Color('hsla(240, 100%, 50%, 0.5)');
        expect(c1.rgba()).toEqual('rgba(0, 0, 255, 0.5)');
    });

    it("should accept CSS hsl(a) values without the percentage sign", function() {
        var c1 = new Color('hsl(120, 100, 50)');
        expect(c1.hex()).toEqual('#00ff00');

        var c1 = new Color('hsla(240, 100, 50, 0.5)');
        expect(c1.rgba()).toEqual('rgba(0, 0, 255, 0.5)');
    });

    it("should accept red, green, blue and alpha values", function() {
        var c = new Color(255, 0, 0, 0.5);
        expect(c.hex()).toEqual('#ff0000');
        expect(c.rgba()).toEqual('rgba(255, 0, 0, 0.5)');
    });
})

describe("The CSS output functions", function () {
    it("should return correct hex values", function() {
        var c1 = new Color('rgba(255, 0, 0, 1)');
        expect(c1.hex()).toEqual('#ff0000');

        var c2 = new Color('rgba(128, 128, 128)');
        expect(c2.hex()).toEqual('#808080');

        var c3 = new Color('#808080');
        expect(c3.rgb()).toEqual('rgb(128, 128, 128)');
    });

    it("should convert RGB to HSL values", function() {
        var c = new Color('rgb(255, 0, 0)');
        expect(c.hsl()).toEqual('hsl(0, 100%, 50%)');
    });
});

describe("The color modification functions", function () {
    it("should update RGB and HSL values", function() {
        var red = new Color('rgb(255, 0, 0)');
        red.shiftHue(120);
        expect(red.hue()).toEqual(120);
        red.red(255);
        expect(red.hue()).toEqual(60);
    });

    it("should output rgba and hsla for CSS", function() {
        var c = new Color('hsl(0, 100%, 50%)');
        expect(c.hsla(0.66)).toEqual('hsla(0, 100%, 50%, 0.66)');
    });
});

describe("The Color factory functions", function() {
    it("should accept red, green, blue and alpha values", function() {
        var c1 = Color.fromRGB(0, 255, 0);
        expect(c1.hex()).toEqual('#00ff00');

        var c2 = Color.fromRGB(255, 0, 255, 0.5);
        expect(c2.hex()).toEqual('#ff00ff');
        expect(c2.alpha()).toEqual(0.5);
    });

    it("should accept hue, saturation, lightness and alpha values", function() {
        var c1 = Color.fromHSL(0, 100, 50);
        expect(c1.hex()).toEqual('#ff0000');

        var c2 = Color.fromHSL(120, 100, 75, 0.5);
        expect(c2.hex()).toEqual('#80ff80');
        expect(c2.alpha()).toEqual(0.5);
    });
});
