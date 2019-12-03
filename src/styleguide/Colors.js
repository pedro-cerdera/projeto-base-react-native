const primaryColor = "#3949AB";
const secundaryColor = "#6E45AF";
const primaryryColorTranparent = "#6E45AF00";
const textColor = "#343434";
const captionColor = "#585858";
const lightGreyColor = "#B7B7B7";
const redColor = "#F05A2D";
const whiteColor = "#FFFFFF";
const greenColor = "#03C85B";
const textOpacityColor = "#34343499";
const blackColor = "#000000";

const Colors = {
  primary: primaryColor,
  secundary: secundaryColor,

  green: greenColor,
  white: whiteColor,
  black: blackColor,

  lightGrey: lightGreyColor,
  red: redColor,

  text: textColor,
  textOpacity: textOpacityColor,
  caption: captionColor,

  gradient: {
    primary: [primaryColor, secundaryColor],
    primaryBig: [primaryryColorTranparent, "#4B48AC", secundaryColor],
  },
};

export default Colors;

export const ColorNames = {
  ...Object.entries(Colors)
    .filter(entry => entry[0] !== "gradient")
    .map(([key, color]) => ({ [key]: key }))
    // .concat(
    //   ...Object.entries(Colors.gradient).map(([key, color]) => ({
    //     [`gradient-${key}`]: key,
    //   }))
    // )
    .reduce((acc, curr) => ({ ...acc, ...curr }), {}),
};
