import React from "react";
import { ActivityIndicator, View } from "react-native";

import styles from "./styles";

const AuthLoadingScreen = () => {
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
