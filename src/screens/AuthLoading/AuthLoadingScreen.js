import React, { useEffect, useRef } from "react";
import { ActivityIndicator, View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { connect } from "react-redux";

import { Actions } from "reducers";
import { UserStorage } from "storage";

import styles from "./styles";

const mapStoreToProps = store => ({
  isLoaded: store.RemoteConfigReducer.isLoaded,
});

const AuthLoadingScreen = ({ navigation, dispatch, isLoaded }) => {
  const screen = useRef("Unauthorized");
  useEffect(() => {
    const decideRoute = async () => {
      await UserStorage.setToken(null);
      const token = await UserStorage.getToken();
      if (token) {
        screen.current = "Authorized";
      } else {
        screen.current = "Unauthorized";
      }
      dispatch(Actions.RemoteConfig.start("unauthorized"));
    };
    decideRoute();
  }, [dispatch, navigation]);

  useEffect(() => {
    if (isLoaded) {
      navigation.navigate(screen.current);
      setTimeout(() => SplashScreen.hide(), 1000);
    }
  }, [isLoaded, navigation]);

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

export default connect(mapStoreToProps)(AuthLoadingScreen);
