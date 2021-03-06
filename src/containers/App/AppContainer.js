import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { ModalNavigator, UnauthorizedNavigator } from "navigators";
import { AuthLoadingScreen } from "screens";

const AppContainer = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Unauthorized: UnauthorizedNavigator,
    Authorized: ModalNavigator,
  },
  {
    initialRouteName: "AuthLoading",
  }
);

export default createAppContainer(AppContainer);
