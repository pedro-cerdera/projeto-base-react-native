import { scale } from "helpers";

import { StyleSheet } from "react-native";

import Colors from "styleguide/Colors";

export default StyleSheet.create({
  formItemContainer: {
    borderWidth: 1,
    borderRadius: scale(18),
    borderColor: Colors.lightGrey,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  formText: {
    paddingHorizontal: 20,
  },
});
