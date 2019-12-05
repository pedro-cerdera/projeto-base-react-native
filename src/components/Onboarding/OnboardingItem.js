import React from "react";
import { Image, View } from "react-native";

import { getImageSource } from "helpers";
import { CustomText } from "styleguide/Components";

import styles from "./styles";

const OnboardingItem = ({ title, description, image }) => (
  <View style={styles.onboardingItemContainer}>
    <View style={styles.onboardingItemContent}>
      <Image
        source={getImageSource(image.key)}
        resizeMode={"contain"}
        style={styles.image}
      />
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
