import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;

export const scale = size => (width / guidelineBaseWidth) * size;
export const verticalScale = size => (height / guidelineBaseHeight) * size;
export const fontScale = size =>
  Math.min(width / guidelineBaseWidth, 1.45) * size;
