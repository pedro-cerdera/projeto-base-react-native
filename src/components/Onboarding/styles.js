import { StyleSheet } from "react-native";

import { iPhoneXSMaxWidth, scale } from "helpers";

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
    marginBottom: 10,
    height: scale(142),
  },
});
