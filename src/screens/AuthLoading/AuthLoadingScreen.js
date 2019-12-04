import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import SplashScreen from "react-native-splash-screen";

import styles from "./styles";

const AuthLoadingScreen = ({ navigation, dispatch }) => {
  useEffect(() => {
    const decideRoute = async () => {
      // await UserStorage.setToken(null);
      // const token = await UserStorage.getToken();
      // if (token) {
      //   navigation.navigate("Home");
      //   dispatch(Actions.Auth.loadStart());
      // } else {
      navigation.navigate("Onboarding");
      setTimeout(() => SplashScreen.hide(), 1000);

      // }
    };
    decideRoute();
  }, [dispatch, navigation]);

  return (
    <>
      <View style={styles.appContainer}>
        <ActivityIndicator />
      </View>
    </>
  );
};

AuthLoadingScreen.navigationOptions = {
  header: null,
};

export default AuthLoadingScreen;
