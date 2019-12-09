import React, { useCallback, useEffect } from "react";
import { Image, KeyboardAvoidingView, StatusBar, View, Platform } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { connect } from "react-redux";

import { Icon, SafeAreaContainer } from "components";
import { LoginForm } from "forms";
import { getImageSource, isSmallDevice, isTablet, scale } from "helpers";
import { useKeyboard } from "hooks";
import { Header } from "navigators";
import { Actions } from "reducers";
import StyleGuide, { CustomText, Link } from "styleguide";

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
  const { keyboardStatus } = useKeyboard();

  const onSubmit = useCallback(
    (cpf, password) => dispatch(Actions.Auth.login(cpf, password)),
    [dispatch]
  );

  useEffect(() => {
    if (!isLoading && authData) {
      navigation.navigate("AuthLoading");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const displayImage = {
    display:
      (keyboardStatus === "opened" && isSmallDevice) || isSmallDevice
        ? "none"
        : "flex",
  };

  const displayContent = {
    display: keyboardStatus === "opened" && !isTablet ? "none" : "flex",
  };

  return (
    <>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={isTablet ? "transparent" : "white"}
        translucent={isTablet}
      />
      <LinearGradient
        colors={StyleGuide.colors.gradient.primary}
        locations={[0, 1]}
        style={styles.loginContainer}
      >
        <SafeAreaContainer style={styles.safeAreaContainer}>
          <KeyboardAvoidingView
            style={styles.keyboardAvoidViewContainer}
            behavior={"padding"}
            enabled={Platform.OS !== "android"}
            keyboardVerticalOffset={30}
          >
            <View style={styles.loginContent}>
              <Image
                source={getImageSource(
                  configs.login && configs.login.IMAGE.key
                )}
                resizeMode={"contain"}
                style={[styles.logoImage, displayImage]}
              />
              <View style={[styles.loginText, displayContent]}>
                <CustomText align={"center"} type={"caption"}>
                  {configs.login && configs.login.DESCRIPTION}
                </CustomText>
              </View>
              <LoginForm
                onSubmit={onSubmit}
                isLoading={isLoading}
                error={error}
                navigation={navigation}
              />
              <View style={[styles.bottomOptions, displayContent]}>
                <Link underline verticalSpacing>
                  Esqueci minha senha
                </Link>
                <Link underline topSpacing>
                  Ainda não tenho conta
                </Link>
              </View>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaContainer>
      </LinearGradient>
    </>
  );
};

LoginScreen.navigationOptions = ({ navigation }) => ({
  ...Header,
  header: isTablet ? null : undefined,
  gesturesEnabled: false,
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
