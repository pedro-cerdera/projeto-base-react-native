import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { AuthLoadingScreen } from "screens";

const AppContainer = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
  },
  {
    initialRouteName: "AuthLoading",
  }
);

export default createAppContainer(AppContainer);
