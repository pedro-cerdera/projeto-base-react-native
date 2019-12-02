import { StyleSheet } from "react-native";

import { DEVICE_WIDTH, scale, isSmallDevice } from "helpers";

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
  },
  backDrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#00000077",
  },
  modalContent: {
    width: DEVICE_WIDTH - 40,
    flex: 1,
    backgroundColor: "white",
    marginVertical: scale(isSmallDevice ? 50 : 100),
    borderRadius: 10,
  },
  headerConteiner: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
