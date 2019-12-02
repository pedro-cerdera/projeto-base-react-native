import React from "react";
import { Animated } from "react-native";

import StyleGuide, { CustomText } from "styleguide";

import styles, { MaskedTextInput, TextInput } from "./styles";

const Input = props => {
  const display = { display: props.visible ? "flex" : "none" };
  const TextInputDef = props.masked ? MaskedTextInput : TextInput;

  return (
    <Animated.View style={[props.containerStyle, display]}>
      <CustomText
        style={styles.title}
        type={"inputTitle"}
        color={StyleGuide.colors.text}
      >
        {props.title}
      </CustomText>
      <TextInputDef {...props} ref={props.refProp} />
      {props.error && (
        <CustomText
          verticalSpacing
          leftSpacing
          type={"caption"}
          color={StyleGuide.colors.red}
        >
          {props.error}
        </CustomText>
      )}
    </Animated.View>
  );
};

Input.defaultProps = {
  visible: true,
  masked: false,
};

export default Input;
