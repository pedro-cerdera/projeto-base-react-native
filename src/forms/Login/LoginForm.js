import React, { useCallback, useEffect, useRef, useState } from "react";
import { BackHandler } from "react-native";

import { Button, FormItem, Input } from "components";
import { unmaskCpf, validateCpf, validatePassword } from "helpers";
import { useBackHandler, useForm } from "hooks";

import styles from "./styles";

const LoginForm = ({ onSubmit, isLoading, error, navigation }) => {
  const [cpfInserted, setCpfInserted] = useState(false);
  const passwordInput = useRef(null);

  const Form = useForm({
    initialValues: {
      cpf: __DEV__ ? "603.497.400-38" : "",
      password: __DEV__ ? "123456" : "",
    },
    onSubmit: values => {
      onSubmit(unmaskCpf(values.cpf), values.password);
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

  const onHandleBackPress = useCallback(() => {
    if (cpfInserted) {
      setCpfInserted(false);
    } else {
      BackHandler.exitApp();
    }
    return true;
  }, [cpfInserted]);

  useBackHandler(onHandleBackPress);

  const onActionPress = useCallback(() => {
    if (!cpfInserted) {
      if (!Form.handleBlur("cpf").cpf) {
        setCpfInserted(true);
        passwordInput.current.focus();
      }
    } else if (!Form.handleBlur("password").password) {
      Form.handleSubmit();
    }
  }, [Form, cpfInserted]);

  useEffect(() => {
    if (error) {
      setCpfInserted(false);
    }
  }, [error]);

  useEffect(() => {
    if (cpfInserted) {
      navigation.setParams({ backHandler: () => setCpfInserted(false) });
    } else {
      navigation.setParams({ backHandler: null });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cpfInserted]);

  return (
    <>
      <FormItem
        visible={cpfInserted}
        value={Form.values.cpf}
        containerStyle={styles.formItemContainer}
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
        containerStyle={styles.buttonContainer}
        color={"primary"}
        size={"small"}
        onPress={onActionPress}
        loading={isLoading}
      >
        {cpfInserted ? "Acessar" : "Avançar"}
      </Button>
    </>
  );
};

export default LoginForm;
