import React, { useCallback } from "react";
import { StatusBar, View, Platform } from "react-native";
import DropdownAlert from "react-native-dropdownalert";

import { isTablet } from "helpers";
import StyleGuide, { CustomText } from "styleguide";

import styles from "./styles";

const alertTypeColors = {
  error: StyleGuide.colors.red,
};

const DropdownAlertMessage = ({ type, message }) => {
  const backgroundColor = {
    backgroundColor: alertTypeColors[type],
  };
  return (
    <View style={styles.messageContainer}>
      <View style={[styles.messageContent, backgroundColor]}>
        <CustomText type={"inputTitle"} color={"white"}>
          {message}
        </CustomText>
      </View>
    </View>
  );
};

const DropdownAlertComponent = () => {
  const closeAlert = useCallback(() => {
    StatusBar.setBarStyle(
      StatusBar &&
        StatusBar._propsStack &&
        StatusBar._propsStack.length > 0 &&
        StatusBar._propsStack[StatusBar._propsStack.length - 1].barStyle.value
        ? StatusBar._propsStack[StatusBar._propsStack.length - 1].barStyle.value
        : StatusBar._defaultProps.barStyle.value
    );
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor(
        StatusBar &&
          StatusBar._propsStack &&
          StatusBar._propsStack.length > 0 &&
          StatusBar._propsStack[StatusBar._propsStack.length - 1]
            .backgroundColor.value
          ? StatusBar._propsStack[StatusBar._propsStack.length - 1]
            .backgroundColor.value
          : StatusBar._defaultProps.backgroundColor.value,
        true
      );
    }
  }, []);

  const paddingTop =
    Platform.OS === "android" ? (isTablet ? 62 : 0) : isTablet ? 82 : 20;

  return (
    <DropdownAlert
      ref={ref => DropDownHolder.setDropDown(ref)}
      errorColor={isTablet ? "transparent" : StyleGuide.colors.red}
      imageStyle={styles.image}
      titleStyle={styles.title}
      defaultContainer={{ ...styles.dropdownAlertContainer, paddingTop }}
      renderMessage={(props, state) => <DropdownAlertMessage {...state} />}
      updateStatusBar={Platform.OS !== "android"}
      onClose={closeAlert}
    />
  );
};

export class DropDownHolder {
  static dropDown;

  static setDropDown(dropDown) {
    this.dropDown = dropDown;
  }
  static getDropDown() {
    return this.dropDown;
  }

  static alertWithType(type, title, message) {
    if (Platform.OS === "android" && !isTablet) {
      StatusBar.setBarStyle("light-content");
      StatusBar.setBackgroundColor(StyleGuide.colors.red, true);
    }
    this.dropDown.alertWithType(type, title, message);
  }
}

export default DropdownAlertComponent;
