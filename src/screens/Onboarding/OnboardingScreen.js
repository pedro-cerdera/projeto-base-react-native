import React from "react";
import { View } from "react-native";

import { CustomText } from "styleguide/Components";

import styles from "./styles";

const OnboardingScreen = () => (
  <>
    <View style={styles.homeContainer}>
      <CustomText>Onboarding Screen</CustomText>
    </View>
  </>
);

OnboardingScreen.navigationOptions = {
  header: null,
};

export default OnboardingScreen;
