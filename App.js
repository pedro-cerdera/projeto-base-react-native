/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from "react";
import { StatusBar } from "react-native";

import { Redux } from "@redux";
import { AppContainer } from "containers";

const App = () => {
  return (
    <Redux>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <AppContainer />
    </Redux>
  );
};

export default App;
