import React from "react";
import { Image, KeyboardAvoidingView, Platform, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { getImageSource, isSmallDevice, isTablet, scale } from "helpers";
import { useKeyboard } from "hooks";
import styled from "styled-components/native";
import StyleGuide, { CustomText } from "styleguide";

import styles from "./styles";

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  /* background-color: ${StyleGuide.colors.white}; */
`;

export const DefaultSpacingContainer = styled.View`
  margin: 20px 20px ${props => (props.disableBottomSpacing ? 0 : 20)}px 20px;
  flex: 1;
`;

export const CardContainer = styled.TouchableOpacity.attrs(props => ({
  disabled: !props.onPress,
}))`
  border: 1px solid ${StyleGuide.colors.lightGrey};
  padding: 20px;
  flex: 1;
  border-radius: 10px;
`;

export const UnauthorizedFormContainer = ({
  source,
  description,
  children,
}) => {
  const { keyboardStatus } = useKeyboard();

  const displayImage = {
    display:
      (keyboardStatus === "opened" && isSmallDevice) || isSmallDevice
        ? "none"
        : "flex",
  };

  const displayContent = {
    display: keyboardStatus === "opened" && !isTablet ? "none" : "flex",
  };

  return (
    <LinearGradient
      colors={StyleGuide.colors.gradient.primary}
      locations={[0, 1]}
      style={styles.unauthorizedFormContainer}
    >
      <SafeAreaContainer style={styles.safeAreaContainer}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidViewContainer}
          behavior={"padding"}
          enabled={Platform.OS !== "android"}
          keyboardVerticalOffset={30}
        >
          <View style={styles.unauthorizedFormContent}>
            <Image
              source={getImageSource(source)}
              resizeMode={"contain"}
              style={[styles.logoImage, displayImage]}
            />
            <View style={[styles.unauthorizedFormText, displayContent]}>
              <CustomText align={"center"} type={"caption"}>
                {description}
              </CustomText>
            </View>
            {children}
          </View>
        </KeyboardAvoidingView>
      </SafeAreaContainer>
    </LinearGradient>
  );
};
