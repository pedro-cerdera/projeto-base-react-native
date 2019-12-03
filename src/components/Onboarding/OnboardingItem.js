import React from "react";
import { Image, View } from "react-native";

import { CustomText } from "styleguide/Components";

import styles from "./styles";

const OnboardingItem = ({ title, description, image }) => (
  <View style={styles.onboardingItemContainer}>
    <View style={styles.onboardingItemContent}>
      <Image source={image} resizeMode={"contain"} style={styles.image} />
      <CustomText
        type={"title"}
        color={"white"}
        align={"center"}
        verticalSpacing
      >
        {title}
      </CustomText>
      <CustomText
        type={"text"}
        color={"white"}
        align={"center"}
        verticalSpacing
      >
        {description}
      </CustomText>
    </View>
  </View>
);

export default OnboardingItem;
