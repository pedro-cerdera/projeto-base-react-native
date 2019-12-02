import React from "react";
import { View } from "react-native";

import { CustomText } from "styleguide/Components";

import styles from "./styles";

const HomeScreen = () => (
  <>
    <View style={styles.homeContainer}>
      <CustomText>Home Screen</CustomText>
    </View>
  </>
);

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;
