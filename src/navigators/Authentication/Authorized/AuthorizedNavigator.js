import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from "react-navigation-stack";

import { HomeScreen } from "screens";

const Routes = {
  Home: HomeScreen,
};

const Config = {
  navigationOptions: {
    header: null,
  },
  transitionConfig: () => ({
    ...StackViewTransitionConfigs.SlideFromRightIOS,
  }),
};

export default createStackNavigator(Routes, Config);
