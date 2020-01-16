import React from "react";
import {
  ActivityIndicator,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";

import PropTypes from "prop-types";
import { CustomText } from "styleguide";
import Colors, { ColorNames } from "styleguide/Colors";

import {
  ButtonContainer,
  ButtonDelimiter,
  RoundButtonContainer,
  SquareButtonContainer,
} from "./styles";

const ButtonStyles = (color, textColor) => ({
  outline: {
    text: {
      color: Colors[color] || color,
    },
    button: {
      border: Colors[color] || color,
      background: "transparent",
      ripple: `${Colors[color] || color}55`,
    },
  },
  solid: {
    text: {
      color: textColor || "white",
    },
    button: {
      background: Colors[color] || color,
      ripple: color !== "white" ? "#fff5" : `${textColor}55`,
    },
  },
});

const ButtonComponentSelector = (children, loading, buttonStyle) => {
  if (loading) {
    return <ActivityIndicator size={"small"} color={buttonStyle.text.color} />;
  }
  if (typeof children === "string") {
    return (
      <CustomText color={buttonStyle.text.color} type={"button"}>
        {children}
      </CustomText>
    );
  }
  return children;
};

const ButtonSizes = size => {
  switch (size) {
    case "small":
      return {
        round: { width: 44, height: 44, borderRadius: 44 / 2 },
        square: {
          minHeight: 46,
          // paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 5,
        },
        normal: { minHeight: 34, borderRadius: 34 / 2 },
      };

    case "large":
      return {
        round: { width: 64, height: 64, borderRadius: 64 / 2 },
        square: {
          minHeight: 64,
          borderRadius: 5,
        },
        normal: { minHeight: 54, borderRadius: 54 / 2 },
      };

    default:
      return {
        round: { width: 54, height: 54, borderRadius: 54 / 2 },
        square: {
          minHeight: 54,
          borderRadius: 5,
        },
        normal: { minHeight: 44, borderRadius: 44 / 2 },
      };
  }
};

const ButtonShapes = shape => {
  switch (shape) {
    case "normal":
      return ButtonContainer;
    case "square":
      return SquareButtonContainer;
    case "round":
      return RoundButtonContainer;
    default:
      return ButtonContainer;
  }
};

const Button = props => {
  const {
    loading,
    bottomSpacing,
    verticalSpacing,

    theme,
    textColor,
    color,
    shape,
    size,

    onPress,
    containerStyle,
    style,
    children,
  } = props;

  const Touchable = Platform.select({
    ios: TouchableOpacity,
    android: TouchableNativeFeedback,
  });

  const Container = ButtonShapes(shape);
  const buttonStyle = ButtonStyles(color, textColor)[theme];
  const buttonSize = ButtonSizes(size)[shape];
  let ButtonComponent = ButtonComponentSelector(children, loading, buttonStyle);

  ButtonComponent = (
    <Container
      theme={buttonStyle.button}
      color={color}
      shape={shape}
      size={size}
      style={[buttonSize, style]}
    >
      {ButtonComponent}
    </Container>
  );

  if (loading) {
    return (
      <ButtonDelimiter
        {...props}
        shape={shape}
        style={[buttonSize, containerStyle]}
        bottomSpacing={bottomSpacing}
        verticalSpacing={verticalSpacing}
      >
        {ButtonComponent}
      </ButtonDelimiter>
    );
  }

  ButtonComponent = (
    <Touchable
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(
        buttonStyle.button.ripple,
        false
      )}
      activeOpacity={0.7}
    >
      {ButtonComponent}
    </Touchable>
  );

  return (
    <ButtonDelimiter
      {...props}
      shape={shape}
      style={[buttonSize, containerStyle]}
      bottomSpacing={bottomSpacing}
      verticalSpacing={verticalSpacing}
    >
      {ButtonComponent}
    </ButtonDelimiter>
  );
};

Button.defaultProps = {
  loading: false,
  bottomSpacing: false,
  verticalSpacing: false,
  theme: "solid",
  color: "primary",
  shape: "square",
  size: "normal",
  onPress: () => { },
  containerStyle: {},
};

Button.propTypes = {
  color: PropTypes.oneOf([...Object.keys(ColorNames)]),
};

export default Button;
