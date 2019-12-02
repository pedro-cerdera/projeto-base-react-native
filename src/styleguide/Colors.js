const primaryColor = "#3949AB";
const secundaryColor = "#4555AF";
const secundaryColorLighten = "#4555AF33";
const secundaryColorLight = "#4555AF9C";
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

  secundaryLighten: secundaryColorLighten,
  secundaryLight: secundaryColorLight,
  green: greenColor,
  white: whiteColor,
  black: blackColor,

  lightGrey: lightGreyColor,
  red: redColor,

  text: textColor,
  textOpacity: textOpacityColor,
  caption: captionColor,
};

export default Colors;

export const ColorNames = {
  ...Object.entries(Colors)
    .map(([key, color]) => ({ [key]: key }))
    .reduce((acc, curr) => ({ ...acc, ...curr }), {}),
};
