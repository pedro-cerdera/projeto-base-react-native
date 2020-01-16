import { Easing, Animated } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

import { OnboardingScreen, LoginScreen, RecoverScreen } from "screens";

const Routes = {
  Onboarding: OnboardingScreen,
  Login: LoginScreen,
  Recover: RecoverScreen,
};

const Config = {
  transitionConfig: () => {
    return {
      transitionSpec: {
        duration: 750,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;

        const thisSceneIndex = scene.index;
        const width = layout.initWidth;

        const translateX = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex],
          outputRange: [width, 0],
        });

        return { transform: [{ translateX }] };
      },
    };
  },
};

export default createStackNavigator(Routes, Config);
