import { MaskService } from "react-native-masked-text";

const TextHelpers = {
  maskMoney: (text = 0) =>
    MaskService.toMask("money", text, {
      precision: 2,
      separator: ",",
      delimiter: ".",
      unit: "R$ ",
      suffixUnit: "",
    }),
  unmaskMoney: (text = "") =>
    (text !== "" && Number(text.replace(/[^0-9,]+/g, "").replace(",", "."))) ||
    0,
  capitalizeFirstLetter: (text = "") =>
    text.replace(
      /\w\S*/g,
      txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    ),
};

export const maskMoney = TextHelpers.maskMoney;

export const unmaskMoney = TextHelpers.unmaskMoney;

export const capitalizeFirstLetter = TextHelpers.capitalizeFirstLetter;

export default TextHelpers;
