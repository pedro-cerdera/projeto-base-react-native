import React, { useCallback, useState, useRef } from "react";
import { View, StatusBar, Image, KeyboardAvoidingView } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import {
  Icon,
  SafeAreaContainer,
  DefaultSpacingContainer,
  Input,
  Button,
  FormItem,
} from "components";
import {
  getImageSource,
  scale,
  validateCpf,
  validatePassword,
  isSmallDevice,
  DEVICE_WIDTH,
  isTablet,
} from "helpers";
import { useForm, useBackHandler, useKeyboard } from "hooks";
import { Header } from "navigators";
import StyleGuide from "styleguide";
import Colors from "styleguide/Colors";
import { CustomText, Link } from "styleguide/Components";

import styles from "./styles";

const LoginScreen = () => {
  const [cpfInserted, setCpfInserted] = useState(false);
  const passwordInput = useRef(null);

  const { keyboardStatus } = useKeyboard();

  const Form = useForm({
    initialValues: {
      cpf: __DEV__ ? "123.456.789-01" : "",
      password: __DEV__ ? "123456" : "",
    },
    onSubmit: values => {
      alert(values.email, values.password);
    },
    validate(values) {
      const errors = {};
      if (!validateCpf(values.cpf)) {
        errors.cpf = "CPF inválido";
      }
      if (!validatePassword(values.password)) {
        errors.password = "Senha inválida";
      }
      return errors;
    },
  });

  const onActionPress = useCallback(() => {
    if (!cpfInserted) {
      if (!Form.handleBlur("cpf").cpf) {
        setCpfInserted(true);
      }
    } else if (!Form.handleBlur("password").password) {
      Form.handleSubmit();
    }
  }, [Form, cpfInserted]);
  return (
    <>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={"white"}
        translucent={false}
      />
      <LinearGradient
        colors={Colors.gradient.primary}
        locations={[0, 1]}
        style={styles.homeContainer}
      >
        <SafeAreaContainer
          style={{
            backgroundColor: isTablet ? "transparent" : "white",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <KeyboardAvoidingView
            // style={{ width: "100%" }}
            style={{
              width: DEVICE_WIDTH,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
            behavior={"padding"}
            keyboardVerticalOffset={30}
          >
            <View
              style={{
                flex: isTablet ? 0 : 1,
                backgroundColor: "white",
                width: isTablet ? 454 : "100%",
                borderRadius: isTablet ? 10 : 0,
                paddingHorizontal: isTablet ? 60 : 40,
                paddingTop: isTablet ? 40 : 20,
                // flexShrink: 0,
              }}
            >
              <Image
                source={getImageSource("logo-text")}
                resizeMode={"contain"}
                style={{
                  height: scale(45),
                  maxHeight: 45,
                  alignSelf: "center",
                  display:
                    (keyboardStatus === "opened" && isSmallDevice) ||
                      isSmallDevice
                      ? "none"
                      : "flex",
                  marginBottom: 70,
                }}
              />
              <View
                style={{
                  marginHorizontal: isTablet ? 30 : 0,
                  marginBottom: isSmallDevice || isTablet ? 20 : 40,
                  display:
                    keyboardStatus === "opened" && !isTablet ? "none" : "flex",
                }}
              >
                <CustomText align={"center"} type={"caption"}>
                  Log in to save to your favorites so we can better personalize
                  your recommendations
                </CustomText>
              </View>

              <FormItem
                visible={cpfInserted}
                value={Form.values.cpf}
                containerStyle={{
                  marginBottom: isSmallDevice || isTablet ? 20 : 40,
                  alignSelf: "center",
                }}
                onPress={() => setCpfInserted(false)}
              />
              <Input
                masked
                onChangeText={text => Form.handleChange(text, "cpf")}
                value={Form.values.cpf}
                error={Form.errors.cpf}
                type={"cpf"}
                keyboardType={"decimal-pad"}
                title={"CPF"}
                autoCorrect={false}
                placeholder={"123.456.789-05"}
                onSubmitEditing={onActionPress}
                returnKeyType={"done"}
                visible={!cpfInserted}
              />
              <Input
                onChangeText={text => Form.handleChange(text, "password")}
                refProp={input => (passwordInput.current = input)}
                value={Form.values.password}
                error={Form.errors.password}
                keyboardType={"default"}
                title={"Senha"}
                autoCorrect={false}
                placeholder={"******"}
                secureTextEntry
                autoCompleteType={"password"}
                returnKeyType={"go"}
                onSubmitEditing={onActionPress}
                visible={cpfInserted}
              />
              <Button
                containerStyle={{ marginTop: 10, marginBottom: 14 }}
                color={"primary"}
                size={"small"}
                onPress={onActionPress}
              >
                Avançar
              </Button>

              <View
                style={{
                  alignItems: "center",
                  display:
                    keyboardStatus === "opened" && !isTablet
                      ? "none"
                      : "flex",
                }}
              >
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
  headerLeft: (
    <Icon
      onPress={() => navigation.goBack()}
      name={"fa5-arrow-left"}
      size={24}
      solid
      color={StyleGuide.colors.primary}
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

export default LoginScreen;
