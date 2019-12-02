import React from "react";
import { View } from "react-native";
import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from "react-navigation-stack";

import { Icon } from "components";
import { ModalScreen, BottomSheetScreen } from "screens";
import StyleGuide from "styleguide";

import { AuthorizedNavigator } from "..";

import { Header } from "./Header";

const Routes = {
  Main: AuthorizedNavigator,
  Modal: ModalScreen,
  BottomSheet: BottomSheetScreen,
};

const Config = {
  mode: "modal",
  transparentCard: true,
  defaultNavigationOptions: ({ navigation }) => ({
    ...Header,
    headerTransparent: true,
    headerLeft: navigation.getParam("backHandler", false) ? (
      <Icon
        onPress={navigation.getParam("backHandler", () => {})}
        name={"fa5-arrow-left"}
        size={24}
        solid
        color={StyleGuide.colors.primary}
      />
    ) : (
      <View />
    ),
    headerRight: (
      <Icon
        onPress={() => navigation.goBack(null)}
        name={"fa5-times"}
        size={24}
        solid
        color={StyleGuide.colors.primary}
      />
    ),
  }),
  transitionConfig: () => ({ ...StackViewTransitionConfigs.NoAnimation }),
};

export default createStackNavigator(Routes, Config);
