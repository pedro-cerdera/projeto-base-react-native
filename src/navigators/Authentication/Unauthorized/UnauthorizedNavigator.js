import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from "react-navigation-stack";

import { OnboardingScreen } from "screens";

const Routes = {
  Onboarding: OnboardingScreen,
};

const Config = {
  transitionConfig: () => {
    return {
      ...StackViewTransitionConfigs.SlideFromRightIOS,
    };
  },
};

export default createStackNavigator(Routes, Config);
