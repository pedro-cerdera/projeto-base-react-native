import { StyleSheet } from "react-native";

import { iPhoneXSMaxWidth, scale, isSmallDevice } from "helpers";

export default StyleSheet.create({
  onboardingItemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  onboardingItemContent: {
    justifyContent: "center",
    alignItems: "center",
    maxWidth: iPhoneXSMaxWidth,
  },
  image: {
    marginBottom: isSmallDevice ? 10 : 70,
    height: scale(142),
    maxHeight: 200,
  },
});
