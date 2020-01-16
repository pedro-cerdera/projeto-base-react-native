import { StyleSheet } from "react-native";

import { DEVICE_WIDTH, isSmallDevice, isTablet, scale } from "helpers";
import StyleGuide from "styleguide";

const media = isSmallDevice ? "small" : isTablet ? "tablet" : "default";

const medias = {
  tablet: {
    safeAreaContainer: {
      backgroundColor: "transparent",
    },
    unauthorizedFormContent: {
      flex: 0,
      width: 454,
      borderRadius: 10,
      paddingHorizontal: 60,
      paddingTop: 40,
    },
    unauthorizedFormText: {
      marginHorizontal: 30,
      marginBottom: 20,
    },
  },
  small: {
    recoverText: {
      marginBottom: 20,
    },
  },
  default: {},
};

export default StyleSheet.create({
  unauthorizedFormContainer: {
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
  unauthorizedFormContent: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    borderRadius: 0,
    paddingHorizontal: 40,
    paddingTop: 20,
    ...medias[media].unauthorizedFormContent,
  },
  logoImage: {
    height: scale(45),
    maxHeight: 45,
    alignSelf: "center",
    marginBottom: 70,
  },
  unauthorizedFormText: {
    marginHorizontal: 0,
    marginBottom: 40,
    ...medias[media].unauthorizedFormText,
  },
  bottomOptions: {
    alignItems: "center",
  },
});
