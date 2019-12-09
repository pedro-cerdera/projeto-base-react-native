import { StyleSheet } from "react-native";

import { isSmallDevice, isTablet } from "helpers";

const media = isSmallDevice ? "small" : isTablet ? "tablet" : "default";

const medias = {
  tablet: {
    messageContainer: {
      alignItems: "center",
    },
    messageContent: {
      paddingHorizontal: 27,
      paddingVertical: 11,
      alignItems: "center",
      borderRadius: 35,
    },
  },
  small: {},
  default: {},
};
export default StyleSheet.create({
  image: { display: "none" },
  title: { display: "none" },
  messageContainer: {
    alignItems: "flex-start",
    ...medias[media].messageContainer,
  },
  messageContent: {
    ...medias[media].messageContent,
  },
  dropdownAlertContainer: {
    paddingHorizontal: 20,
    paddingBottom: 2,
    flexDirection: "row",
  },
});
