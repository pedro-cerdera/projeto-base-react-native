import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from "react-navigation-stack";

import { OnboardingScreen, LoginScreen } from "screens";

const Routes = {
  Onboarding: OnboardingScreen,
  Login: LoginScreen,
};

const Config = {
  transitionConfig: () => {
    return {
      ...StackViewTransitionConfigs.SlideFromRightIOS,
    };
  },
};

export default createStackNavigator(Routes, Config);
