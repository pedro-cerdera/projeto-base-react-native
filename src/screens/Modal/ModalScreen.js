import React, { useCallback, useEffect, useMemo } from "react";
import {
  Animated,
  StatusBar,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { DefaultSpacingContainer, Icon } from "components";
import { useBackHandler } from "hooks";
import StyleGuide, { CustomText } from "styleguide";

import styles from "./styles";

const ModalScreen = ({ navigation }) => {
  const children = navigation.getParam("children", <View />);
  const hasClose = navigation.getParam("hasClose", false);
  const title = navigation.getParam("title", "");

  const opacity = useMemo(() => new Animated.Value(0), []);
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 250,
    }).start();
  }, [opacity]);

  const goBack = useCallback(() => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 250,
    }).start(() => {
      navigation.goBack();
      navigation.getParam("afterBackAction", () => {})();
    });
  }, [navigation, opacity]);

  useBackHandler(() => {
    goBack();
    return true;
  });

  return (
    <View style={styles.modalContainer}>
      <StatusBar
        barStyle={"dark-content"}
        animated
        backgroundColor={"#00000077"}
      />
      <TouchableWithoutFeedback onPress={goBack}>
        <Animated.View style={[styles.backDrop, { opacity }]} />
      </TouchableWithoutFeedback>

      <Animated.View style={[styles.modalContent, { opacity }]}>
        <DefaultSpacingContainer>
          <View style={styles.headerConteiner}>
            <CustomText type={"title"}>{title}</CustomText>
            {hasClose && (
              <Icon
                onPress={goBack}
                name={"fa5-times"}
                size={24}
                solid
                color={StyleGuide.colors.primary}
              />
            )}
          </View>
          {children}
        </DefaultSpacingContainer>
      </Animated.View>
    </View>
  );
};

ModalScreen.navigationOptions = {
  header: null,
};

export default ModalScreen;
