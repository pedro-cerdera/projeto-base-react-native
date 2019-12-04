import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { connect } from "react-redux";

import { Actions } from "reducers";

import styles from "./styles";

const mapStoreToProps = store => ({
  isLoaded: store.RemoteConfigReducer.isLoaded,
});


const AuthLoadingScreen = ({ navigation, dispatch, isLoaded }) => {
  useEffect(() => {
    const decideRoute = async () => {
      dispatch(Actions.RemoteConfig.start("unauthorized"));
    };
    decideRoute();
  }, [dispatch, navigation]);

  console.tron.log(isLoaded)

  useEffect(() => {
    if (isLoaded) {
      navigation.navigate("Onboarding");
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
