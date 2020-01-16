import React, { useCallback, useEffect } from "react";
import { Image, StatusBar, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { Icon, UnauthorizedFormContainer } from "components";
import { LoginForm } from "forms";
import { getImageSource, isSmallDevice, isTablet, scale } from "helpers";
import { useKeyboard } from "hooks";
import { Header } from "navigators";
import { Actions } from "reducers";
import StyleGuide, { Link } from "styleguide";

import styles from "./styles";

const mapStoreToProps = store => ({
  isLoading: store.AuthReducer.isLoading,
  error: store.AuthReducer.error,
  authData: store.AuthReducer.authData,
  configs: store.RemoteConfigReducer.configs,
});

const LoginScreen = ({
  dispatch,
  isLoading,
  authData,
  error,
  navigation,
  configs,
}) => {
  const onSubmit = useCallback(
    (cpf, password) => dispatch(Actions.Auth.login(cpf, password)),
    [dispatch]
  );

  const { keyboardStatus } = useKeyboard();

  const displayContent = {
    display: keyboardStatus === "opened" && !isTablet ? "none" : "flex",
  };

  useEffect(() => {
    if (!isLoading && authData && authData.token) {
      navigation.navigate("AuthLoading");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={isTablet ? "transparent" : "white"}
        translucent={isTablet}
      />
      <UnauthorizedFormContainer
        source={configs.login && configs.login.IMAGE.key}
        description={configs.login && configs.login.DESCRIPTION}
      >
        <LoginForm
          onSubmit={onSubmit}
          isLoading={isLoading}
          error={error}
          navigation={navigation}
        />
        <View style={[styles.bottomOptions, displayContent]}>
          <TouchableOpacity onPress={() => navigation.navigate("Recover")}>
            <Link underline verticalSpacing>
              Esqueci minha senha
            </Link>
          </TouchableOpacity>
          <Link underline topSpacing>
            Ainda não tenho conta
          </Link>
        </View>
      </UnauthorizedFormContainer>
    </>
  );
};

LoginScreen.navigationOptions = ({ navigation }) => ({
  ...Header,
  header: isTablet ? null : undefined,
  gesturesEnabled: false,
  headerTransparent: isTablet,
  headerLeft: navigation.getParam("backHandler", false) ? (
    <Icon
      onPress={navigation.getParam("backHandler")}
      name={"fa5-arrow-left"}
      size={24}
      solid
      color={StyleGuide.colors.primary}
    />
  ) : (
      <View />
    ),
  headerRight: (
    <Image
      source={getImageSource("logo-text")}
      resizeMode={"contain"}
      style={{
        width: scale(153),
        display: isSmallDevice ? "flex" : "none",
      }}
    />
  ),
});

export default connect(mapStoreToProps)(LoginScreen);
