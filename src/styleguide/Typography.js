const mapWeight = {
  100: "ExtraLight",
  200: "Light",
  300: "Thin",
  400: "Regular",
  500: "Medium",
  600: "SemiBold",
  700: "Bold",
  800: "ExtraBold",
  900: "Black",

  lighter: "ExtraLight",
  light: "Light",
  normal: "Regular",
  medium: "Medium",
  bold: "Bold",
  bolder: "Black",
  regular: "Regular",
};

const mapStyle = { italic: "Italic" };

export function getStyle(weight, style) {
  if ((weight === "normal" || weight === "400") && style === "italic") {
    return "Italic";
  }

  return mapWeight[weight] + (mapStyle[style] || "");
}

const Typography = {
  defaultFontFamily: `Montserrat-${getStyle("regular", "")}`,
  title: {
    size: 30,
    lineHeight: 37,
    weight: "bold",
  },
  mediumTitle: {
    size: 20,
    lineHeight: 24,
    weight: "bold",
  },
  inputTitle: {
    size: 16,
    lineHeight: 19,
    weight: "bold",
  },
  smallTitle: {
    size: 14,
    lineHeight: 25,
    weight: "bold",
  },
  smallestTitle: {
    size: 12,
    lineHeight: 14,
    weight: "bold",
  },
  text: {
    size: 16,
    lineHeight: 25,
    weight: "regular",
  },
  caption: {
    size: 14,
    lineHeight: 18,
    weight: "regular",
  },
  button: {
    size: 18,
    lineHeight: 22,
    weight: "regular",
  },
  link: {
    size: 16,
    lineHeight: 19,
    weight: "regular",
  },
};

export default Typography;
