import React from "react";
import { StatusBar, View, Platform } from "react-native";
import DropdownAlert from "react-native-dropdownalert";

import { Redux } from "@redux";
import { AppContainer } from "containers";
import StyleGuide, { CustomText } from "styleguide";

const App = () => {
  console.log(StatusBar._propsStack);

  return (
    <View style={{ flex: 1 }}>
      <Redux>
        <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
        <AppContainer />
      </Redux>
      <DropdownAlert
        ref={ref => DropDownHolder.setDropDown(ref)}
        errorColor={StyleGuide.colors.red}
        imageStyle={{ display: "none" }}
        defaultContainer={{
          paddingHorizontal: 20,
          paddingTop: Platform.OS === "android" ? 0 : 20,
          paddingBottom: 2,
          flexDirection: "row",
        }}
        renderTitle={(props, state) => (
          <CustomText type={"inputTitle"} color={"white"}>
            {state.message}
          </CustomText>
        )}
        messageStyle={{ display: "none" }}
        onClose={() => {
          StatusBar.setBarStyle(
            StatusBar &&
              StatusBar._propsStack &&
              StatusBar._propsStack.length > 0 &&
              StatusBar._propsStack[StatusBar._propsStack.length - 1].barStyle
                .value
              ? StatusBar._propsStack[StatusBar._propsStack.length - 1].barStyle
                .value
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
                : StatusBar._defaultProps.backgroundColor.value
            );
          }
        }}
      />
    </View>
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
}

export default App;
