import React from "react";
import { StatusBar, View, Platform } from "react-native";

import { Redux } from "@redux";
import { DropdownAlert } from "components";
import { AppContainer } from "containers";
import { isTablet } from "helpers";
import StyleGuide, { CustomText } from "styleguide";

const App = () => {
  // console.log(StatusBar._propsStack);

  return (
    <View style={{ flex: 1 }}>
      <Redux>
        <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
        <AppContainer />
      </Redux>
      <DropdownAlert />
    </View>
  );
};

export default App;
