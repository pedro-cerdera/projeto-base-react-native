import React, { useCallback, useEffect } from "react";
import { Image, StatusBar } from "react-native";
import { connect } from "react-redux";

import { Icon, UnauthorizedFormContainer } from "components";
import { RecoverForm } from "forms";
import { getImageSource, isSmallDevice, isTablet, scale } from "helpers";
import { Header } from "navigators";
import { Actions } from "reducers";
import StyleGuide from "styleguide";

const mapStoreToProps = store => ({
  isLoading: store.AuthReducer.isLoading,
  error: store.AuthReducer.error,
  authData: store.AuthReducer.authData,
  configs: store.RemoteConfigReducer.configs,
});

const RecoverScreen = ({
  dispatch,
  isLoading,
  authData,
  error,
  navigation,
  configs,
}) => {
  const onSubmit = useCallback(cpf => dispatch(Actions.Auth.recover(cpf)), [
    dispatch,
  ]);

  useEffect(() => {
    if (!isLoading && authData) {
      navigation.goBack();
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
        source={configs.recover && configs.recover.IMAGE.key}
        description={configs.recover && configs.recover.DESCRIPTION}
      >
        <RecoverForm
          onSubmit={onSubmit}
          isLoading={isLoading}
          error={error}
          navigation={navigation}
        />
      </UnauthorizedFormContainer>
    </>
  );
};

RecoverScreen.navigationOptions = ({ navigation }) => ({
  ...Header,
  headerTransparent: isTablet,
  headerLeft: (
    <Icon
      onPress={() => navigation.goBack(null)}
      name={"fa5-arrow-left"}
      size={24}
      solid
      color={isTablet ? StyleGuide.colors.white : StyleGuide.colors.primary}
    />
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

export default connect(mapStoreToProps)(RecoverScreen);
