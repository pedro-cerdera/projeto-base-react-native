/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from "react";
import { StatusBar } from "react-native";

import { AppContainer } from "./src/containers";

const App = () => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <AppContainer />
    </>
  );
};

export default App;
