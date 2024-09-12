/**
 * Contains tests for the basic functionality of the application.
 */
import PigmentTS from "../index";

/**
 * Contains tests for converting colors.
 */
describe("Color conversion", () => {
  const convertColor = PigmentTS.convertColor;

  const hexToRgb = {
    "#FF0000": "rgb(255, 0, 0)",
    "#00FF00": "rgb(0, 255, 0)",
    "#0000FF": "rgb(0, 0, 255)",
    "#FFFFFF": "rgb(255, 255, 255)",
    "#000000": "rgb(0, 0, 0)",
    "#FF00FF": "rgb(255, 0, 255)",
    "#00FFFF": "rgb(0, 255, 255)",
    "#C0C0C0": "rgb(192, 192, 192)",
    "#808080": "rgb(128, 128, 128)",
    "#800000": "rgb(128, 0, 0)",
    "#808000": "rgb(128, 128, 0)",
    "#008000": "rgb(0, 128, 0)",
    "#800080": "rgb(128, 0, 128)",
    "#A52A2A": "rgb(165, 42, 42)",
    "#FFA500": "rgb(255, 165, 0)",
  };

  const hexToHsl = {
    "#FF0000": "hsl(0, 100%, 50%)",
    "#00FF00": "hsl(120, 100%, 50%)",
    "#0000FF": "hsl(240, 100%, 50%)",
    "#FFFFFF": "hsl(0, 0%, 100%)",
    "#000000": "hsl(0, 0%, 0%)",
    "#FF00FF": "hsl(300, 100%, 50%)",
    "#00FFFF": "hsl(180, 100%, 50%)",
    "#C0C0C0": "hsl(0, 0%, 75%)",
    "#808080": "hsl(0, 0%, 50%)",
    "#800000": "hsl(0, 100%, 25%)",
    "#808000": "hsl(60, 100%, 25%)",
    "#008000": "hsl(120, 100%, 25%)",
    "#800080": "hsl(300, 100%, 25%)",
    "#A52A2A": "hsl(0, 59%, 41%)",
    "#FFA500": "hsl(39, 100%, 50%)",
  };

  const rgbToHex = {
    "rgb(255, 0, 0)": "#FF0000",
    "rgb(0, 255, 0)": "#00FF00",
    "rgb(0, 0, 255)": "#0000FF",
    "rgb(255, 255, 255)": "#FFFFFF",
    "rgb(0, 0, 0)": "#000000",
    "rgb(255, 0, 255)": "#FF00FF",
    "rgb(0, 255, 255)": "#00FFFF",
    "rgb(192, 192, 192)": "#C0C0C0",
    "rgb(128, 128, 128)": "#808080",
    "rgb(128, 0, 0)": "#800000",
    "rgb(128, 128, 0)": "#808000",
    "rgb(0, 128, 0)": "#008000",
    "rgb(128, 0, 128)": "#800080",
    "rgb(165, 42, 42)": "#A52A2A",
    "rgb(255, 165, 0)": "#FFA500",
  };

  const rgbToHsl = {
    "rgb(255, 0, 0)": "hsl(0, 100%, 50%)",
    "rgb(0, 255, 0)": "hsl(120, 100%, 50%)",
    "rgb(0, 0, 255)": "hsl(240, 100%, 50%)",
    "rgb(255, 255, 255)": "hsl(0, 0%, 100%)",
    "rgb(0, 0, 0)": "hsl(0, 0%, 0%)",
    "rgb(255, 0, 255)": "hsl(300, 100%, 50%)",
    "rgb(0, 255, 255)": "hsl(180, 100%, 50%)",
    "rgb(192, 192, 192)": "hsl(0, 0%, 75%)",
    "rgb(128, 128, 128)": "hsl(0, 0%, 50%)",
    "rgb(128, 0, 0)": "hsl(0, 100%, 25%)",
    "rgb(128, 128, 0)": "hsl(60, 100%, 25%)",
    "rgb(0, 128, 0)": "hsl(120, 100%, 25%)",
    "rgb(128, 0, 128)": "hsl(300, 100%, 25%)",
    "rgb(165, 42, 42)": "hsl(0, 59%, 41%)",
    "rgb(255, 165, 0)": "hsl(39, 100%, 50%)",
  };

  const hslToHex = {
    "hsl(0, 100%, 50%)": "#FF0000",
    "hsl(120, 100%, 50%)": "#00FF00",
    "hsl(240, 100%, 50%)": "#0000FF",
    "hsl(0, 0%, 100%)": "#FFFFFF",
    "hsl(0, 0%, 0%)": "#000000",
    "hsl(300, 100%, 50%)": "#FF00FF",
    "hsl(180, 100%, 50%)": "#00FFFF",
    "hsl(0, 0%, 75%)": "#BFBFBF",
    "hsl(0, 0%, 50%)": "#808080",
    "hsl(0, 100%, 25%)": "#800000",
    "hsl(60, 100%, 25%)": "#7F8000",
    "hsl(120, 100%, 25%)": "#008000",
    "hsl(300, 100%, 25%)": "#80007F",
    "hsl(0, 60%, 41%)": "#A72A2A",
    "hsl(39, 100%, 50%)": "#FFA600",
  };

  const hslToRgb = {
    "hsl(0, 100%, 50%)": "rgb(255, 0, 0)",
    "hsl(120, 100%, 50%)": "rgb(0, 255, 0)",
    "hsl(240, 100%, 50%)": "rgb(0, 0, 255)",
    "hsl(0, 0%, 100%)": "rgb(255, 255, 255)",
    "hsl(0, 0%, 0%)": "rgb(0, 0, 0)",
    "hsl(300, 100%, 50%)": "rgb(255, 0, 255)",
    "hsl(180, 100%, 50%)": "rgb(0, 255, 255)",
    "hsl(0, 0%, 75%)": "rgb(191, 191, 191)",
    "hsl(0, 0%, 50%)": "rgb(128, 128, 128)",
    "hsl(0, 100%, 25%)": "rgb(128, 0, 0)",
    "hsl(60, 100%, 25%)": "rgb(127, 128, 0)",
    "hsl(120, 100%, 25%)": "rgb(0, 128, 0)",
    "hsl(300, 100%, 25%)": "rgb(128, 0, 127)",
    "hsl(0, 60%, 41%)": "rgb(167, 42, 42)",
    "hsl(39, 100%, 50%)": "rgb(255, 166, 0)",
  };

  const toRgba = {
    // hex to rgba
    "#FF0000": "rgba(255, 0, 0, 1)",
    "#00FF00": "rgba(0, 255, 0, 1)",
    "#0000FF": "rgba(0, 0, 255, 1)",
    "#FFFFFF": "rgba(255, 255, 255, 1)",
    "#000000": "rgba(0, 0, 0, 1)",
    // rgb to rgba
    "rgb(255, 0, 0)": "rgba(255, 0, 0, 1)",
    "rgb(0, 255, 0)": "rgba(0, 255, 0, 1)",
    "rgb(0, 0, 255)": "rgba(0, 0, 255, 1)",
    "rgb(255, 255, 255)": "rgba(255, 255, 255, 1)",
    "rgb(0, 0, 0)": "rgba(0, 0, 0, 1)",
    // hsl to rgba
    "hsl(0, 100%, 50%)": "rgba(255, 0, 0, 1)",
    "hsl(120, 100%, 50%)": "rgba(0, 255, 0, 1)",
    "hsl(240, 100%, 50%)": "rgba(0, 0, 255, 1)",
    "hsl(0, 0%, 100%)": "rgba(255, 255, 255, 1)",
    "hsl(0, 0%, 0%)": "rgba(0, 0, 0, 1)",
    // tw to rgba
    "red-500": "rgba(239, 67, 67, 1)",
    "yellow-600": "rgba(200, 138, 4, 1)",
    "green-200": "rgba(187, 247, 208, 1)",
    "violet-500": "rgba(137, 90, 246, 1)",
    "gray-900": "rgba(17, 24, 39, 1)",
  };

  const toHsla = {
    // hex to hsla
    "#FF0000": "hsla(0, 100%, 50%, 1)",
    "#00FF00": "hsla(120, 100%, 50%, 1)",
    "#0000FF": "hsla(240, 100%, 50%, 1)",
    "#FFFFFF": "hsla(0, 0%, 100%, 1)",
    "#000000": "hsla(0, 0%, 0%, 1)",
    // rgb to hsla
    "rgb(255, 0, 0)": "hsla(0, 100%, 50%, 1)",
    "rgb(0, 255, 0)": "hsla(120, 100%, 50%, 1)",
    "rgb(0, 0, 255)": "hsla(240, 100%, 50%, 1)",
    "rgb(255, 255, 255)": "hsla(0, 0%, 100%, 1)",
    "rgb(0, 0, 0)": "hsla(0, 0%, 0%, 1)",
    // hsl to hsla
    "hsl(0, 100%, 50%)": "hsla(0, 100%, 50%, 1)",
    "hsl(120, 100%, 50%)": "hsla(120, 100%, 50%, 1)",
    "hsl(240, 100%, 50%)": "hsla(240, 100%, 50%, 1)",
    "hsl(0, 0%, 100%)": "hsla(0, 0%, 100%, 1)",
    "hsl(0, 0%, 0%)": "hsla(0, 0%, 0%, 1)",
    // tw to hsla
    "red-500": "hsla(0, 84%, 60%, 1)",
    "yellow-600": "hsla(41, 96%, 40%, 1)",
    "green-200": "hsla(141, 79%, 85%, 1)",
    "violet-500": "hsla(258, 90%, 66%, 1)",
    "gray-900": "hsla(221, 39%, 11%, 1)",
  };

  const rgbaToHex = {
    "rgba(255, 0, 0, 1)": "#FF0000",
    "rgba(0, 255, 0, 1)": "#00FF00",
    "rgba(0, 0, 255, 1)": "#0000FF",
    "rgba(255, 255, 255, 1)": "#FFFFFF",
    "rgba(0, 0, 0, 1)": "#000000",
  };

  const rgbaToRgb = {
    "rgba(255, 150, 0, 1)": "rgb(255, 150, 0)",
    "rgba(0, 255, 150, 1)": "rgb(0, 255, 150)",
    "rgba(150, 0, 255, 0.2)": "rgb(150, 0, 255)",
    "rgba(255, 255, 255, 0.5)": "rgb(255, 255, 255)",
    "rgba(0, 0, 0, 0.5)": "rgb(0, 0, 0)",
  };

  const rgbaToHsl = {
    "rgba(255, 0, 0, 0.1)": "hsl(0, 100%, 50%)",
    "rgba(0, 255, 0, 0.1)": "hsl(120, 100%, 50%)",
    "rgba(0, 0, 255, 0.1)": "hsl(240, 100%, 50%)",
    "rgba(255, 255, 255, 0.1)": "hsl(0, 0%, 100%)",
    "rgba(0, 0, 0, 0.1)": "hsl(0, 0%, 0%)",
  };

  const rgbaToHsla = {
    "rgba(255, 0, 0, 0.2)": "hsla(0, 100%, 50%, 0.2)",
    "rgba(0, 255, 0, 0.3)": "hsla(120, 100%, 50%, 0.3)",
    "rgba(0, 0, 255, 0.4)": "hsla(240, 100%, 50%, 0.4)",
    "rgba(255, 255, 255, 0.7)": "hsla(0, 0%, 100%, 0.7)",
    "rgba(0, 0, 0, 0.6)": "hsla(0, 0%, 0%, 0.6)",
  };

  const rgbaToTw = {
    "rgba(239, 67, 67, 1)": "red-500",
    "rgba(200, 138, 4, 1)": "yellow-600",
    "rgba(187, 247, 208, 1)": "green-200",
    "rgba(137, 90, 246, 1)": "violet-500",
    "rgba(17, 24, 39, 1)": "gray-900",
  };

  const hslaToHex = {
    "hsla(0, 100%, 50%, 1)": "#FF0000",
    "hsla(120, 100%, 50%, 1)": "#00FF00",
    "hsla(240, 100%, 50%, 1)": "#0000FF",
    "hsla(0, 0%, 100%, 1)": "#FFFFFF",
    "hsla(0, 0%, 0%, 1)": "#000000",
  };

  const hslaToRgb = {
    "hsla(0, 100%, 50%, 0.5)": "rgb(255, 0, 0)",
    "hsla(120, 100%, 50%, 0.5)": "rgb(0, 255, 0)",
    "hsla(240, 100%, 50%, 0.5)": "rgb(0, 0, 255)",
    "hsla(0, 0%, 100%, 0.5)": "rgb(255, 255, 255)",
    "hsla(0, 0%, 0%, 0.5)": "rgb(0, 0, 0)",
  };

  const hslaToHsl = {
    "hsla(0, 100%, 50%, 0.2)": "hsl(0, 100%, 50%)",
    "hsla(120, 100%, 50%, 0.3)": "hsl(120, 100%, 50%)",
    "hsla(240, 100%, 50%, 0.4)": "hsl(240, 100%, 50%)",
    "hsla(0, 0%, 100%, 0.7)": "hsl(0, 0%, 100%)",
    "hsla(0, 0%, 0%, 0.6)": "hsl(0, 0%, 0%)",
  };

  const hslaToRgba = {
    "hsla(0, 100%, 50%, 0.1)": "rgba(255, 0, 0, 0.1)",
    "hsla(120, 100%, 50%, 0.2)": "rgba(0, 255, 0, 0.2)",
    "hsla(240, 100%, 50%, 0.3)": "rgba(0, 0, 255, 0.3)",
    "hsla(0, 0%, 100%, 0.4)": "rgba(255, 255, 255, 0.4)",
    "hsla(0, 0%, 0%, 0.9)": "rgba(0, 0, 0, 0.9)",
  };

  const hslaToTw = {
    "hsla(0, 84%, 60%, 0.6)": "red-500",
    "hsla(41, 96%, 40%, 0.7)": "yellow-600",
    "hsla(141, 79%, 85%, 0.8)": "green-200",
    "hsla(258, 90%, 66%, 0.9)": "violet-500",
    "hsla(221, 39%, 11%, 1)": "gray-900",
  };

  // hex to rgb
  describe("HEX to RGB", () => {
    it.each(Object.keys(hexToRgb))("should convert %s to rgb", hex => {
      expect(convertColor(hex, "rgb")).toBe(hexToRgb[hex]);
    });
  });

  // hex to hsl
  describe("HEX to HSL", () => {
    it.each(Object.keys(hexToRgb))("should convert %s to hsl", hex => {
      expect(convertColor(hex, "hsl")).toBe(hexToHsl[hex]);
    });
  });

  // rgb to hex
  describe("RGB to HEX", () => {
    it.each(Object.keys(rgbToHex))("should convert %s to hex", rgb => {
      expect(convertColor(rgb, "hex")).toBe(rgbToHex[rgb]);
    });
  });

  // rgb to hsl
  describe("RGB to HSL", () => {
    it.each(Object.keys(rgbToHsl))("should convert %s to hsl", rgb => {
      expect(convertColor(rgb, "hsl")).toBe(rgbToHsl[rgb]);
    });
  });

  // hsl to hex
  describe("HSL to HEX", () => {
    it.each(Object.keys(hslToHex))("should convert %s to hex", hsl => {
      expect(convertColor(hsl, "hex")).toBe(hslToHex[hsl]);
    });
  });

  // hsl to rgb
  describe("HSL to RGB", () => {
    it.each(Object.keys(hslToRgb))("should convert %s to rgb", hsl => {
      expect(convertColor(hsl, "rgb")).toBe(hslToRgb[hsl]);
    });
  });

  // to rgba
  describe("To RGBA", () => {
    it.each(Object.keys(toRgba))("should convert %s to rgba", color => {
      expect(convertColor(color, "rgba")).toBe(toRgba[color]);
    });
  });

  // to hsla
  describe("To HSLA", () => {
    it.each(Object.keys(toHsla))("should convert %s to hsla", color => {
      expect(convertColor(color, "hsla")).toBe(toHsla[color]);
    });
  });

  // rgba to hex
  describe("RGBA to HEX", () => {
    it.each(Object.keys(rgbaToHex))("should convert %s to hex", color => {
      expect(convertColor(color, "hex")).toBe(rgbaToHex[color]);
    });
  });

  // rgba to rgb
  describe("RGBA to RGB", () => {
    it.each(Object.keys(rgbaToRgb))("should convert %s to rgb", color => {
      expect(convertColor(color, "rgb")).toBe(rgbaToRgb[color]);
    });
  });

  // rgba to hsl
  describe("RGBA to HSL", () => {
    it.each(Object.keys(rgbaToHsl))("should convert %s to hsl", color => {
      expect(convertColor(color, "hsl")).toBe(rgbaToHsl[color]);
    });
  });

  // rgba to hsla
  describe("RGBA to HSLA", () => {
    it.each(Object.keys(rgbaToHsla))("should convert %s to hsla", color => {
      expect(convertColor(color, "hsla")).toBe(rgbaToHsla[color]);
    });
  });

  // rgba to tw
  describe("RGBA to TW", () => {
    it.each(Object.keys(rgbaToTw))("should convert %s to tw", color => {
      expect(convertColor(color, "tw")).toBe(rgbaToTw[color]);
    });
  });

  // hsla to hex
  describe("HSLA to HEX", () => {
    it.each(Object.keys(hslaToHex))("should convert %s to hex", color => {
      expect(convertColor(color, "hex")).toBe(hslaToHex[color]);
    });
  });

  // hsla to rgb
  describe("HSLA to RGB", () => {
    it.each(Object.keys(hslaToRgb))("should convert %s to rgb", color => {
      expect(convertColor(color, "rgb")).toBe(hslaToRgb[color]);
    });
  });

  // hsla to hsl
  describe("HSLA to HSL", () => {
    it.each(Object.keys(hslaToHsl))("should convert %s to hsl", color => {
      expect(convertColor(color, "hsl")).toBe(hslaToHsl[color]);
    });
  });

  // hsla to rgba
  describe("HSLA to RGBA", () => {
    it.each(Object.keys(hslaToRgba))("should convert %s to rgba", color => {
      expect(convertColor(color, "rgba")).toBe(hslaToRgba[color]);
    });
  });

  // hsla to tw
  describe("HSLA to TW", () => {
    it.each(Object.keys(hslaToTw))("should convert %s to tw", color => {
      expect(convertColor(color, "tw")).toBe(hslaToTw[color]);
    });
  });
});

/**
 * Contains tests for lightening colors.
 */
describe("Lightening colors", () => {
  const lightenColor = PigmentTS.lightenColor;

  const lighten20 = {
    // hex
    "#FF0000": "#FF3333",
    "#00FF00": "#33FF33",
    "#0000FF": "#3333FF",
    "#FFFFFF": "#FFFFFF",
    "#000000": "#333333",
    // rgb
    "rgb(255, 0, 0)": "rgb(255, 51, 51)",
    "rgb(0, 255, 0)": "rgb(51, 255, 51)",
    "rgb(0, 0, 255)": "rgb(51, 51, 255)",
    "rgb(255, 255, 255)": "rgb(255, 255, 255)",
    "rgb(0, 0, 0)": "rgb(51, 51, 51)",
    // hsl
    "hsl(0, 100%, 50%)": "hsl(0, 100%, 60%)",
    "hsl(120, 100%, 50%)": "hsl(120, 100%, 60%)",
    "hsl(240, 100%, 50%)": "hsl(240, 100%, 60%)",
    "hsl(0, 0%, 100%)": "hsl(0, 0%, 100%)",
    "hsl(0, 0%, 0%)": "hsl(0, 0%, 20%)",
    // rgba
    "rgba(255, 0, 0, 1)": "rgba(255, 51, 51, 1)",
    "rgba(0, 255, 0, 0.5)": "rgba(51, 255, 51, 0.5)",
    "rgba(0, 0, 255, 0.2)": "rgba(51, 51, 255, 0.2)",
    "rgba(255, 255, 255, 0.8)": "rgba(255, 255, 255, 0.8)",
    "rgba(0, 0, 0, 0.1)": "rgba(51, 51, 51, 0.1)",
    // hsla
    "hsla(0, 100%, 50%, 1)": "hsla(0, 100%, 60%, 1)",
    "hsla(120, 100%, 50%, 0.5)": "hsla(120, 100%, 60%, 0.5)",
    "hsla(240, 100%, 50%, 0.2)": "hsla(240, 100%, 60%, 0.2)",
    "hsla(0, 0%, 100%, 0.8)": "hsla(0, 0%, 100%, 0.8)",
    "hsla(0, 0%, 0%, 0.1)": "hsla(0, 0%, 20%, 0.1)",
  };

  const lighten50 = {
    // hex
    "#FF0000": "#FF7F7F",
    "#00FF00": "#7FFF7F",
    "#0000FF": "#7F7FFF",
    "#FFFFFF": "#FFFFFF",
    "#000000": "#7F7F7F",
    // rgb
    "rgb(255, 0, 0)": "rgb(255, 127, 127)",
    "rgb(0, 255, 0)": "rgb(127, 255, 127)",
    "rgb(0, 0, 255)": "rgb(127, 127, 255)",
    "rgb(255, 255, 255)": "rgb(255, 255, 255)",
    "rgb(0, 0, 0)": "rgb(127, 127, 127)",
    // hsl
    "hsl(0, 100%, 50%)": "hsl(0, 100%, 75%)",
    "hsl(120, 100%, 50%)": "hsl(120, 100%, 75%)",
    "hsl(240, 100%, 50%)": "hsl(240, 100%, 75%)",
    "hsl(0, 0%, 100%)": "hsl(0, 0%, 100%)",
    "hsl(0, 0%, 0%)": "hsl(0, 0%, 50%)",
    // rgba
    "rgba(255, 0, 0, 1)": "rgba(255, 127, 127, 1)",
    "rgba(0, 255, 0, 0.5)": "rgba(127, 255, 127, 0.5)",
    "rgba(0, 0, 255, 0.2)": "rgba(127, 127, 255, 0.2)",
    "rgba(255, 255, 255, 0.8)": "rgba(255, 255, 255, 0.8)",
    "rgba(0, 0, 0, 0.1)": "rgba(127, 127, 127, 0.1)",
    // hsla
    "hsla(0, 100%, 50%, 1)": "hsla(0, 100%, 75%, 1)",
    "hsla(120, 100%, 50%, 0.5)": "hsla(120, 100%, 75%, 0.5)",
    "hsla(240, 100%, 50%, 0.2)": "hsla(240, 100%, 75%, 0.2)",
    "hsla(0, 0%, 100%, 0.8)": "hsla(0, 0%, 100%, 0.8)",
    "hsla(0, 0%, 0%, 0.1)": "hsla(0, 0%, 50%, 0.1)",
  };

  const lighten80 = {
    // hex
    "#FF0000": "#FFCCCC",
    "#00FF00": "#CCFFCC",
    "#0000FF": "#CCCCFF",
    "#FFFFFF": "#FFFFFF",
    "#000000": "#CCCCCC",
    // rgb
    "rgb(255, 0, 0)": "rgb(255, 204, 204)",
    "rgb(0, 255, 0)": "rgb(204, 255, 204)",
    "rgb(0, 0, 255)": "rgb(204, 204, 255)",
    "rgb(255, 255, 255)": "rgb(255, 255, 255)",
    "rgb(0, 0, 0)": "rgb(204, 204, 204)",
    // hsl
    "hsl(0, 100%, 50%)": "hsl(0, 100%, 90%)",
    "hsl(120, 100%, 50%)": "hsl(120, 100%, 90%)",
    "hsl(240, 100%, 50%)": "hsl(240, 100%, 90%)",
    "hsl(0, 0%, 100%)": "hsl(0, 0%, 100%)",
    "hsl(0, 0%, 0%)": "hsl(0, 0%, 80%)",
    // rgba
    "rgba(255, 0, 0, 1)": "rgba(255, 204, 204, 1)",
    "rgba(0, 255, 0, 0.5)": "rgba(204, 255, 204, 0.5)",
    "rgba(0, 0, 255, 0.2)": "rgba(204, 204, 255, 0.2)",
    "rgba(255, 255, 255, 0.8)": "rgba(255, 255, 255, 0.8)",
    "rgba(0, 0, 0, 0.1)": "rgba(204, 204, 204, 0.1)",
    // hsla
    "hsla(0, 100%, 50%, 1)": "hsla(0, 100%, 90%, 1)",
    "hsla(120, 100%, 50%, 0.5)": "hsla(120, 100%, 90%, 0.5)",
    "hsla(240, 100%, 50%, 0.2)": "hsla(240, 100%, 90%, 0.2)",
    "hsla(0, 0%, 100%, 0.8)": "hsla(0, 0%, 100%, 0.8)",
    "hsla(0, 0%, 0%, 0.1)": "hsla(0, 0%, 80%, 0.1)",
  };

  // lighten by 20%
  describe("Lighten by 20%", () => {
    it.each(Object.keys(lighten20))("should lighten %s by 20%", color => {
      expect(lightenColor(color, 20)).toBe(lighten20[color]);
    });
  });

  // lighten by 50%
  describe("Lighten by 50%", () => {
    it.each(Object.keys(lighten50))("should lighten %s by 50%", color => {
      expect(lightenColor(color, 50)).toBe(lighten50[color]);
    });
  });

  // lighten by 80%
  describe("Lighten by 80%", () => {
    it.each(Object.keys(lighten80))("should lighten %s by 80%", color => {
      expect(lightenColor(color, 80)).toBe(lighten80[color]);
    });
  });
});

/**
 * Contains tests for darkening colors.
 */
describe("Darkening colors", () => {
  const darkenColor = PigmentTS.darkenColor;

  const darken20 = {
    // hex
    "#FF0000": "#CC0000",
    "#00FF00": "#00CC00",
    "#0000FF": "#0000CC",
    "#FFFFFF": "#CCCCCC",
    "#000000": "#000000",
    // rgb
    "rgb(255, 0, 0)": "rgb(204, 0, 0)",
    "rgb(0, 255, 0)": "rgb(0, 204, 0)",
    "rgb(0, 0, 255)": "rgb(0, 0, 204)",
    "rgb(255, 255, 255)": "rgb(204, 204, 204)",
    "rgb(0, 0, 0)": "rgb(0, 0, 0)",
    // hsl
    "hsl(0, 100%, 50%)": "hsl(0, 100%, 40%)",
    "hsl(120, 100%, 50%)": "hsl(120, 100%, 40%)",
    "hsl(240, 100%, 50%)": "hsl(240, 100%, 40%)",
    "hsl(0, 0%, 100%)": "hsl(0, 0%, 80%)",
    "hsl(0, 0%, 0%)": "hsl(0, 0%, 0%)",
    // rgba
    "rgba(255, 0, 0, 1)": "rgba(204, 0, 0, 1)",
    "rgba(0, 255, 0, 0.5)": "rgba(0, 204, 0, 0.5)",
    "rgba(0, 0, 255, 0.2)": "rgba(0, 0, 204, 0.2)",
    "rgba(255, 255, 255, 0.8)": "rgba(204, 204, 204, 0.8)",
    "rgba(0, 0, 0, 0.1)": "rgba(0, 0, 0, 0.1)",
    // hsla
    "hsla(0, 100%, 50%, 1)": "hsla(0, 100%, 40%, 1)",
    "hsla(120, 100%, 50%, 0.5)": "hsla(120, 100%, 40%, 0.5)",
    "hsla(240, 100%, 50%, 0.2)": "hsla(240, 100%, 40%, 0.2)",
    "hsla(0, 0%, 100%, 0.8)": "hsla(0, 0%, 80%, 0.8)",
    "hsla(0, 0%, 0%, 0.1)": "hsla(0, 0%, 0%, 0.1)",
  };

  const darken50 = {
    // hex
    "#FF0000": "#800000",
    "#00FF00": "#008000",
    "#0000FF": "#000080",
    "#FFFFFF": "#808080",
    "#000000": "#000000",
    // rgb
    "rgb(255, 0, 0)": "rgb(128, 0, 0)",
    "rgb(0, 255, 0)": "rgb(0, 128, 0)",
    "rgb(0, 0, 255)": "rgb(0, 0, 128)",
    "rgb(255, 255, 255)": "rgb(128, 128, 128)",
    "rgb(0, 0, 0)": "rgb(0, 0, 0)",
    // hsl
    "hsl(0, 100%, 50%)": "hsl(0, 100%, 25%)",
    "hsl(120, 100%, 50%)": "hsl(120, 100%, 25%)",
    "hsl(240, 100%, 50%)": "hsl(240, 100%, 25%)",
    "hsl(0, 0%, 100%)": "hsl(0, 0%, 50%)",
    "hsl(0, 0%, 0%)": "hsl(0, 0%, 0%)",
    // rgba
    "rgba(255, 0, 0, 1)": "rgba(128, 0, 0, 1)",
    "rgba(0, 255, 0, 0.5)": "rgba(0, 128, 0, 0.5)",
    "rgba(0, 0, 255, 0.2)": "rgba(0, 0, 128, 0.2)",
    "rgba(255, 255, 255, 0.8)": "rgba(128, 128, 128, 0.8)",
    "rgba(0, 0, 0, 0.1)": "rgba(0, 0, 0, 0.1)",
    // hsla
    "hsla(0, 100%, 50%, 1)": "hsla(0, 100%, 25%, 1)",
    "hsla(120, 100%, 50%, 0.5)": "hsla(120, 100%, 25%, 0.5)",
    "hsla(240, 100%, 50%, 0.2)": "hsla(240, 100%, 25%, 0.2)",
    "hsla(0, 0%, 100%, 0.8)": "hsla(0, 0%, 50%, 0.8)",
    "hsla(0, 0%, 0%, 0.1)": "hsla(0, 0%, 0%, 0.1)",
  };

  const darken80 = {
    // hex
    "#FF0000": "#330000",
    "#00FF00": "#003300",
    "#0000FF": "#000033",
    "#FFFFFF": "#333333",
    "#000000": "#000000",
    // rgb
    "rgb(255, 0, 0)": "rgb(51, 0, 0)",
    "rgb(0, 255, 0)": "rgb(0, 51, 0)",
    "rgb(0, 0, 255)": "rgb(0, 0, 51)",
    "rgb(255, 255, 255)": "rgb(51, 51, 51)",
    "rgb(0, 0, 0)": "rgb(0, 0, 0)",
    // hsl
    "hsl(0, 100%, 50%)": "hsl(0, 100%, 10%)",
    "hsl(120, 100%, 50%)": "hsl(120, 100%, 10%)",
    "hsl(240, 100%, 50%)": "hsl(240, 100%, 10%)",
    "hsl(0, 0%, 100%)": "hsl(0, 0%, 20%)",
    "hsl(0, 0%, 0%)": "hsl(0, 0%, 0%)",
    // rgba
    "rgba(255, 0, 0, 1)": "rgba(51, 0, 0, 1)",
    "rgba(0, 255, 0, 0.5)": "rgba(0, 51, 0, 0.5)",
    "rgba(0, 0, 255, 0.2)": "rgba(0, 0, 51, 0.2)",
    "rgba(255, 255, 255, 0.8)": "rgba(51, 51, 51, 0.8)",
    "rgba(0, 0, 0, 0.1)": "rgba(0, 0, 0, 0.1)",
    // hsla
    "hsla(0, 100%, 50%, 1)": "hsla(0, 100%, 10%, 1)",
    "hsla(120, 100%, 50%, 0.5)": "hsla(120, 100%, 10%, 0.5)",
    "hsla(240, 100%, 50%, 0.2)": "hsla(240, 100%, 10%, 0.2)",
    "hsla(0, 0%, 100%, 0.8)": "hsla(0, 0%, 20%, 0.8)",
    "hsla(0, 0%, 0%, 0.1)": "hsla(0, 0%, 0%, 0.1)",
  };

  // darken by 20%
  describe("Darken by 20%", () => {
    it.each(Object.keys(darken20))("should darken %s by 20%", color => {
      expect(darkenColor(color, 20)).toBe(darken20[color]);
    });
  });

  // darken by 50%
  describe("Darken by 50%", () => {
    it.each(Object.keys(darken50))("should darken %s by 50%", color => {
      expect(darkenColor(color, 50)).toBe(darken50[color]);
    });
  });

  // darken by 80%
  describe("Darken by 80%", () => {
    it.each(Object.keys(darken80))("should darken %s by 80%", color => {
      expect(darkenColor(color, 80)).toBe(darken80[color]);
    });
  });
});

/**
 * Contains tests for generating random colors.
 */
describe("Random colors", () => {
  const randomColor = PigmentTS.randomColor;

  // random hex
  describe("Random HEX", () => {
    it("should generate a random hex color", () => {
      expect(randomColor("hex")).toMatch(/^#[0-9A-F]{6}$/);
    });
  });

  // random rgb
  describe("Random RGB", () => {
    it("should generate a random rgb color", () => {
      expect(randomColor("rgb")).toMatch(/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/);
    });
  });

  // random hsl
  describe("Random HSL", () => {
    it("should generate a random hsl color", () => {
      expect(randomColor("hsl")).toMatch(
        /^hsl\(\d{1,3}, \d{1,3}%, \d{1,3}%\)$/
      );
    });
  });

  // random rgba
  describe("Random RGBA", () => {
    it("should generate a random rgba color", () => {
      expect(randomColor("rgba")).toMatch(
        /rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), ([0-1](\.\d+)?)\)/
      );
    });
  });

  // random hsla
  describe("Random HSLA", () => {
    it("should generate a random hsla color", () => {
      expect(randomColor("hsla")).toMatch(
        /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%, ([0-1](\.\d+)?)\)/
      );
    });
  });
});

/**
 * Contains tests for changing the opacity of colors.
 */
describe("Changing opacity", () => {
  const setOpacity = PigmentTS.setOpacity;

  const setOpacity20: {
    color: string;
    opacity: number;
    to: "rgba" | "hsla";
    expected: string;
  }[] = [
    // hex to rgba
    {
      color: "#FF0000",
      opacity: 0.2,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.2)",
    },
    {
      color: "#00FF00",
      opacity: 0.2,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.2)",
    },
    // hex to hsla
    {
      color: "#FF0000",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.2)",
    },
    {
      color: "#00FF00",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.2)",
    },
    // rgb to rgba
    {
      color: "rgb(255, 0, 0)",
      opacity: 0.2,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.2)",
    },
    {
      color: "rgb(0, 255, 0)",
      opacity: 0.2,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.2)",
    },
    // rgb to hsla
    {
      color: "rgb(255, 0, 0)",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.2)",
    },
    {
      color: "rgb(0, 255, 0)",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.2)",
    },
    // hsl to rgba
    {
      color: "hsl(0, 100%, 50%)",
      opacity: 0.7,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.7)",
    },
    {
      color: "hsl(120, 100%, 50%)",
      opacity: 0.2,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.2)",
    },
    // hsl to hsla
    {
      color: "hsl(0, 100%, 50%)",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.2)",
    },
    {
      color: "hsl(120, 100%, 50%)",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.2)",
    },
    // tw to rgba
    {
      color: "bg-cyan-500",
      opacity: 0.2,
      to: "rgba",
      expected: "rgba(7, 182, 213, 0.2)",
    },
    {
      color: "bg-green-500",
      opacity: 0.2,
      to: "rgba",
      expected: "rgba(33, 196, 93, 0.2)",
    },
    // tw to hsla
    {
      color: "bg-cyan-500",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(189, 94%, 43%, 0.2)",
    },
    {
      color: "bg-green-500",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(142, 71%, 45%, 0.2)",
    },
    // rgba to hsla
    {
      color: "rgba(255, 0, 0, 1)",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.2)",
    },
    {
      color: "rgba(0, 255, 0, 0.2)",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.2)",
    },
    // rgba to rgba
    {
      color: "rgba(255, 0, 0, 1)",
      opacity: 0.2,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.2)",
    },
    {
      color: "rgba(0, 255, 0, 0.2)",
      opacity: 0.2,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.2)",
    },
    // hsla to rgba
    {
      color: "hsla(0, 100%, 50%, 1)",
      opacity: 1,
      to: "rgba",
      expected: "rgba(255, 0, 0, 1)",
    },
    {
      color: "hsla(120, 100%, 50%, 0.2)",
      opacity: 0.2,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.2)",
    },
    // hsla to hsla
    {
      color: "hsla(0, 100%, 50%, 1)",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.2)",
    },
    {
      color: "hsla(120, 100%, 50%, 0.2)",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.2)",
    },
  ];

  const setOpacity50: {
    color: string;
    opacity: number;
    to: "rgba" | "hsla";
    expected: string;
  }[] = [
    // hex to rgba
    {
      color: "#FF0000",
      opacity: 0.5,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.5)",
    },
    {
      color: "#00FF00",
      opacity: 0.5,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.5)",
    },
    // hex to hsla
    {
      color: "#FF0000",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.5)",
    },
    {
      color: "#00FF00",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.5)",
    },
    // rgb to rgba
    {
      color: "rgb(255, 0, 0)",
      opacity: 0.5,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.5)",
    },
    {
      color: "rgb(0, 255, 0)",
      opacity: 0.5,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.5)",
    },
    // rgb to hsla
    {
      color: "rgb(255, 0, 0)",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.5)",
    },
    {
      color: "rgb(0, 255, 0)",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.5)",
    },
    // hsl to rgba
    {
      color: "hsl(0, 100%, 50%)",
      opacity: 0.5,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.5)",
    },
    {
      color: "hsl(120, 100%, 50%)",
      opacity: 0.5,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.5)",
    },
    // hsl to hsla
    {
      color: "hsl(0, 100%, 50%)",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.5)",
    },
    {
      color: "hsl(120, 100%, 50%)",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.5)",
    },
    // tw to rgba
    {
      color: "bg-cyan-500",
      opacity: 0.5,
      to: "rgba",
      expected: "rgba(7, 182, 213, 0.5)",
    },
    {
      color: "bg-green-500",
      opacity: 0.5,
      to: "rgba",
      expected: "rgba(33, 196, 93, 0.5)",
    },
    // tw to hsla
    {
      color: "bg-cyan-500",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(189, 94%, 43%, 0.5)",
    },
    {
      color: "bg-green-500",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(142, 71%, 45%, 0.5)",
    },
    // rgba to hsla
    {
      color: "rgba(255, 0, 0, 1)",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.5)",
    },
    {
      color: "rgba(0, 255, 0, 0.5)",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.5)",
    },
    // rgba to rgba
    {
      color: "rgba(255, 0, 0, 1)",
      opacity: 0.5,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.5)",
    },
    {
      color: "rgba(0, 255, 0, 0.5)",
      opacity: 0.5,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.5)",
    },
    // hsla to rgba
    {
      color: "hsla(0, 100%, 50%, 1)",
      opacity: 1,
      to: "rgba",
      expected: "rgba(255, 0, 0, 1)",
    },
    {
      color: "hsla(120, 100%, 50%, 0.5)",
      opacity: 0.5,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.5)",
    },
    // hsla to hsla
    {
      color: "hsla(0, 100%, 50%, 1)",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.5)",
    },
    {
      color: "hsla(120, 100%, 50%, 0.5)",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.5)",
    },
  ];

  const setOpacity80: {
    color: string;
    opacity: number;
    to: "rgba" | "hsla";
    expected: string;
  }[] = [
    // hex to rgba
    {
      color: "#FF0000",
      opacity: 0.8,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.8)",
    },
    {
      color: "#00FF00",
      opacity: 0.8,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.8)",
    },
    // hex to hsla
    {
      color: "#FF0000",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.8)",
    },
    {
      color: "#00FF00",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.8)",
    },
    // rgb to rgba
    {
      color: "rgb(255, 0, 0)",
      opacity: 0.8,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.8)",
    },
    {
      color: "rgb(0, 255, 0)",
      opacity: 0.8,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.8)",
    },
    // rgb to hsla
    {
      color: "rgb(255, 0, 0)",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.8)",
    },
    {
      color: "rgb(0, 255, 0)",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.8)",
    },
    // hsl to rgba
    {
      color: "hsl(0, 100%, 50%)",
      opacity: 0.8,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.8)",
    },
    {
      color: "hsl(120, 100%, 50%)",
      opacity: 0.8,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.8)",
    },
    // hsl to hsla
    {
      color: "hsl(0, 100%, 50%)",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.8)",
    },
    {
      color: "hsl(120, 100%, 50%)",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.8)",
    },
    // tw to rgba
    {
      color: "bg-cyan-500",
      opacity: 0.8,
      to: "rgba",
      expected: "rgba(7, 182, 213, 0.8)",
    },
    {
      color: "bg-green-500",
      opacity: 0.8,
      to: "rgba",
      expected: "rgba(33, 196, 93, 0.8)",
    },
    // tw to hsla
    {
      color: "bg-cyan-500",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(189, 94%, 43%, 0.8)",
    },
    {
      color: "bg-green-500",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(142, 71%, 45%, 0.8)",
    },
    // rgba to hsla
    {
      color: "rgba(255, 0, 0, 1)",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.8)",
    },
    {
      color: "rgba(0, 255, 0, 0.8)",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.8)",
    },
    // rgba to rgba
    {
      color: "rgba(255, 0, 0, 1)",
      opacity: 0.8,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.8)",
    },
    {
      color: "rgba(0, 255, 0, 1)",
      opacity: 0.8,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.8)",
    },
    // hsla to rgba
    {
      color: "hsla(0, 100%, 50%, 1)",
      opacity: 1,
      to: "rgba",
      expected: "rgba(255, 0, 0, 1)",
    },
    {
      color: "hsla(120, 100%, 50%, 0.8)",
      opacity: 0.8,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.8)",
    },
    // hsla to hsla
    {
      color: "hsla(0, 100%, 50%, 1)",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.8)",
    },
    {
      color: "hsla(120, 100%, 50%, 0.8)",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.8)",
    },
  ];

  it.each(setOpacity20)(
    `should set opacity to 20%`,
    ({ color, opacity, to, expected }) => {
      expect(setOpacity(color, opacity, to)).toBe(expected);
    }
  );

  it.each(setOpacity50)(
    `should set opacity to 50%`,
    ({ color, opacity, to, expected }) => {
      expect(setOpacity(color, opacity, to)).toBe(expected);
    }
  );

  it.each(setOpacity80)(
    `should set opacity to 80%`,
    ({ color, opacity, to, expected }) => {
      expect(setOpacity(color, opacity, to)).toBe(expected);
    }
  );
});

/**
 * Contains tests for blending colors
 */
describe("Blend colors", () => {
  const blendColors = PigmentTS.blendColors;

  const tests: {
    color: string;
    color2: string;
    ratio: number;
    expected: string;
  }[] = [
    // hex + hex
    {
      color: "#FF0000",
      color2: "#00FF00",
      ratio: 0.5,
      expected: "#808000",
    },
    {
      color: "#FF0000",
      color2: "#00FF00",
      ratio: 0.2,
      expected: "#CC3300",
    },
    // hex + rgb
    {
      color: "#FF0000",
      color2: "rgb(0, 255, 0)",
      ratio: 0.5,
      expected: "#808000",
    },
    {
      color: "#FF0000",
      color2: "rgb(0, 255, 0)",
      ratio: 0.2,
      expected: "#CC3300",
    },
    // hex + hsl
    {
      color: "#FF0000",
      color2: "hsl(120, 100%, 50%)",
      ratio: 0.5,
      expected: "#808000",
    },
    {
      color: "#FF0000",
      color2: "hsl(120, 100%, 50%)",
      ratio: 0.2,
      expected: "#CC3300",
    },
    // hex + rgba
    {
      color: "#FF0000",
      color2: "rgba(0, 255, 0, 0.5)",
      ratio: 0.5,
      expected: "#808000",
    },
    {
      color: "#FF0000",
      color2: "rgba(0, 255, 0, 0.5)",
      ratio: 0.2,
      expected: "#CC3300",
    },
    // hex + hsla
    {
      color: "#FF0000",
      color2: "hsla(120, 100%, 50%, 0.5)",
      ratio: 0.5,
      expected: "#808000",
    },
    {
      color: "#FF0000",
      color2: "hsla(120, 100%, 50%, 0.5)",
      ratio: 0.2,
      expected: "#CC3300",
    },
    // hex + tw
    {
      color: "#FF0000",
      color2: "bg-green-500",
      ratio: 0.5,
      expected: "#91632F",
    },
    {
      color: "#FF0000",
      color2: "bg-green-500",
      ratio: 0.2,
      expected: "#D32713",
    },

    // rgb + rgb
    {
      color: "rgb(255, 150, 0)",
      color2: "rgb(0, 255, 0)",
      ratio: 0.7,
      expected: "rgb(77, 224, 0)",
    },
    {
      color: "rgb(250, 100, 100)",
      color2: "rgb(0, 255, 0)",
      ratio: 0.3,
      expected: "rgb(175, 147, 70)",
    },
    // rgb + hsl
    {
      color: "rgb(255, 150, 0)",
      color2: "hsl(120, 100%, 50%)",
      ratio: 0.7,
      expected: "rgb(77, 224, 0)",
    },
    {
      color: "rgb(250, 100, 100)",
      color2: "hsl(120, 100%, 50%)",
      ratio: 0.3,
      expected: "rgb(175, 147, 70)",
    },
    // rgb + rgba
    {
      color: "rgb(255, 150, 0)",
      color2: "rgba(0, 255, 0, 0.5)",
      ratio: 0.7,
      expected: "rgb(77, 224, 0)",
    },
    {
      color: "rgb(250, 100, 100)",
      color2: "rgba(0, 255, 0, 0.5)",
      ratio: 0.3,
      expected: "rgb(175, 147, 70)",
    },
    // rgb + hsla
    {
      color: "rgb(255, 150, 0)",
      color2: "hsla(120, 100%, 50%, 0.5)",
      ratio: 0.7,
      expected: "rgb(77, 224, 0)",
    },
    {
      color: "rgb(250, 100, 100)",
      color2: "hsla(120, 100%, 50%, 0.5)",
      ratio: 0.3,
      expected: "rgb(175, 147, 70)",
    },
    // rgb + tw
    {
      color: "rgb(255, 150, 0)",
      color2: "bg-green-500",
      ratio: 0.7,
      expected: "rgb(100, 183, 66)",
    },
    {
      color: "rgb(250, 100, 100)",
      color2: "bg-green-500",
      ratio: 0.3,
      expected: "rgb(185, 129, 98)",
    },
    // hsl + hsl
    {
      color: "hsl(0, 100%, 50%)",
      color2: "hsl(120, 100%, 50%)",
      ratio: 0.7,
      expected: "hsl(94, 100%, 35%)",
    },
    {
      color: "hsl(120, 100%, 50%)",
      color2: "hsl(0, 100%, 50%)",
      ratio: 0.3,
      expected: "hsl(94, 100%, 35%)",
    },
    // hsl + rgba
    {
      color: "hsl(0, 100%, 50%)",
      color2: "rgba(0, 255, 0, 0.5)",
      ratio: 0.7,
      expected: "hsl(94, 100%, 35%)",
    },
    {
      color: "hsl(120, 100%, 50%)",
      color2: "rgba(0, 255, 0, 0.5)",
      ratio: 0.3,
      expected: "hsl(120, 100%, 50%)",
    },
    // hsl + hsla
    {
      color: "hsl(0, 100%, 50%)",
      color2: "hsla(120, 100%, 50%, 0.5)",
      ratio: 0.7,
      expected: "hsl(94, 100%, 35%)",
    },
    {
      color: "hsl(120, 100%, 50%)",
      color2: "hsla(0, 100%, 50%, 0.5)",
      ratio: 0.3,
      expected: "hsl(94, 100%, 35%)",
    },
    // hsl + tw
    {
      color: "hsl(0, 100%, 50%)",
      color2: "bg-green-500",
      ratio: 0.7,
      expected: "hsl(92, 35%, 40%)",
    },
    {
      color: "hsl(120, 100%, 50%)",
      color2: "bg-green-500",
      ratio: 0.3,
      expected: "hsl(125, 92%, 49%)",
    },
    // rgba + rgba
    {
      color: "rgba(255, 150, 0, 0.5)",
      color2: "rgba(0, 255, 0, 0.5)",
      ratio: 0.7,
      expected: "rgba(79, 224, 0, 0.5)",
    },
    {
      color: "rgba(250, 100, 100, 0.2)",
      color2: "rgba(0, 255, 0, 0.2)",
      ratio: 0.3,
      expected: "rgba(175, 147, 70, 0.2)",
    },
    // rgba + hsla
    {
      color: "rgba(255, 150, 0, 0.5)",
      color2: "hsla(120, 100%, 50%, 0.5)",
      ratio: 0.7,
      expected: "rgba(79, 224, 0, 0.5)",
    },
    {
      color: "rgba(250, 100, 100, 0.2)",
      color2: "hsla(120, 100%, 50%, 0.2)",
      ratio: 0.3,
      expected: "rgba(175, 147, 70, 0.2)",
    },
    // rgba + tw
    {
      color: "rgba(255, 150, 0, 0.5)",
      color2: "bg-green-500",
      ratio: 0.7,
      expected: "rgba(100, 184, 66, 0.5)",
    },
    {
      color: "rgba(250, 100, 100, 0.2)",
      color2: "bg-green-500",
      ratio: 0.3,
      expected: "rgba(184, 127, 97, 0.2)",
    },
    {
      color: "hsla(120, 100%, 50%, 0.2)",
      color2: "rgba(0, 255, 0, 0.2)",
      ratio: 0.3,
      expected: "hsla(120, 100%, 50%, 0.2)",
    },
    // hsla + hsla
    {
      color: "hsla(0, 100%, 50%, 0.5)",
      color2: "hsla(120, 100%, 50%, 0.5)",
      ratio: 0.7,
      expected: "hsla(94, 100%, 35%, 0.5)",
    },
    {
      color: "hsla(120, 100%, 50%, 0.2)",
      color2: "hsla(120, 100%, 50%, 0.2)",
      ratio: 0.3,
      expected: "hsla(120, 100%, 50%, 0.2)",
    },
    // hsla + tw
    {
      color: "hsla(0, 100%, 50%, 0.5)",
      color2: "bg-green-500",
      ratio: 0.7,
      expected: "hsla(92, 35%, 40%, 0.5)",
    },
    {
      color: "hsla(120, 100%, 50%, 0.2)",
      color2: "bg-green-500",
      ratio: 0.3,
      expected: "hsla(125, 92%, 49%, 0.2)",
    },
    // tw + tw
    {
      color: "green-500",
      color2: "bg-red-500",
      ratio: 0.7,
      expected: "[#B26A4B]",
    },
    {
      color: "bg-green-500",
      color2: "bg-red-500",
      ratio: 0.3,
      expected: "bg-[#609E56]",
    },
  ];

  it.each(tests)(
    "should blend two colors",
    ({ color, color2, ratio, expected }) => {
      expect(blendColors(color, color2, ratio)).toBe(expected);
    }
  );
});
