import { StyleSheet } from "react-native";

import { iPhoneXSMaxWidth } from "helpers";

export default StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  button: {
    marginBottom: 40,
    maxWidth: iPhoneXSMaxWidth,
    alignSelf: "center",
    width: "100%",
  },
  imageBackgroudContainer: {
    width: "100%",
    height: "100%",
  },
});
