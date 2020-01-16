import React, { useCallback } from "react";

import { Button, FormItem, Input } from "components";
import { unmaskCpf, validateCpf } from "helpers";
import { useForm } from "hooks";

import styles from "./styles";

const RecoverForm = ({ onSubmit, isLoading }) => {
  const Form = useForm({
    initialValues: {
      cpf: __DEV__ ? "603.497.400-38" : "",
    },
    onSubmit: values => {
      onSubmit(unmaskCpf(values.cpf));
    },
    validate(values) {
      const errors = {};
      if (!validateCpf(values.cpf)) {
        errors.cpf = "CPF inválido";
      }
      return errors;
    },
  });

  const onActionPress = useCallback(() => {
    if (!Form.handleBlur("cpf").cpf) {
      Form.handleSubmit();
    }
  }, [Form]);

  return (
    <>
      <FormItem
        visible={false}
        value={Form.values.cpf}
        containerStyle={styles.formItemContainer}
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
      />
      <Button
        containerStyle={styles.buttonContainer}
        color={"primary"}
        size={"small"}
        onPress={onActionPress}
        loading={isLoading}
      >
        Recuperar senha
      </Button>
    </>
  );
};

export default RecoverForm;
