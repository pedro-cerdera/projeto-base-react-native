import { StyleSheet } from "react-native";

import { DEVICE_WIDTH, isSmallDevice, isTablet, scale } from "helpers";
import StyleGuide from "styleguide";

const media = isSmallDevice ? "small" : isTablet ? "tablet" : "default";

const medias = {
  tablet: {
    safeAreaContainer: {
      backgroundColor: "transparent",
    },
    loginContent: {
      flex: 0,
      width: 454,
      borderRadius: 10,
      paddingHorizontal: 60,
      paddingTop: 40,
    },
    loginText: {
      marginHorizontal: 30,
      marginBottom: 20,
    },
  },
  small: {
    loginText: {
      marginBottom: 20,
    },
  },
  default: {},
};
export default StyleSheet.create({
  loginContainer: {
    flex: 1,
  },
  safeAreaContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: StyleGuide.colors.white,
    ...medias[media].safeAreaContainer,
  },
  keyboardAvoidViewContainer: {
    width: DEVICE_WIDTH,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginContent: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    borderRadius: 0,
    paddingHorizontal: 40,
    paddingTop: 20,
    ...medias[media].loginContent,
  },
  logoImage: {
    height: scale(45),
    maxHeight: 45,
    alignSelf: "center",
    marginBottom: 70,
  },
  loginText: {
    marginHorizontal: 0,
    marginBottom: 40,
    ...medias[media].loginText,
  },
  bottomOptions: {
    alignItems: "center",
  },
});
