import { StyleSheet } from "react-native";

import { isSmallDevice, isTablet } from "helpers";

const media = isSmallDevice ? "small" : isTablet ? "tablet" : "default";

const medias = {
  tablet: {
    formItemContainer: {
      marginBottom: 20,
    },
  },
  small: {
    formItemContainer: {
      marginBottom: 20,
    },
  },
  default: {},
};
export default StyleSheet.create({
  formItemContainer: {
    marginBottom: 40,
    alignSelf: "center",
    ...medias[media].formItemContainer,
  },
  buttonContainer: {
    marginTop: 10,
    // marginBottom: 14,
  },
});
