import React, { cloneElement, useCallback, useEffect, useMemo } from "react";
import {
  Animated,
  Dimensions,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { useBackHandler } from "hooks";

const { width: DEVICE_WIDTH } = Dimensions.get("window");

const BottomSheetScreen = ({ navigation }) => {
  const children = navigation.getParam("children", <View />);
  const onSubmit = navigation.getParam("onSubmit", () => {});
  const transformValue = useMemo(() => new Animated.Value(0), []);
  useEffect(() => {
    Animated.timing(transformValue, {
      toValue: 1,
      duration: 250,
    }).start();
  }, [transformValue]);

  const goBack = useCallback(() => {
    Animated.timing(transformValue, {
      toValue: 0,
      duration: 250,
    }).start(() => {
      navigation.goBack();
      navigation.getParam("afterBackAction", () => {})();
    });
  }, [navigation, transformValue]);

  useBackHandler(() => {
    goBack();
    return true;
  });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
      <StatusBar
        barStyle={"dark-content"}
        animated
        backgroundColor={"#00000077"}
      />
      <TouchableWithoutFeedback onPress={goBack}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "#00000077",
            opacity: transformValue,
          }}
        />
      </TouchableWithoutFeedback>

      <Animated.View
        style={{
          width: DEVICE_WIDTH,
          backgroundColor: "white",
          opacity: transformValue,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      >
        {cloneElement(children, {
          onSubmit: value => {
            onSubmit(value);
            goBack();
          },
        })}
      </Animated.View>
    </View>
  );
};

BottomSheetScreen.navigationOptions = {
  header: null,
};

export default BottomSheetScreen;
