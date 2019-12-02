import React from "react";

import Colors from "styleguide/Colors";
import Typography from "styleguide/Typography";

import { AnimatedText } from "./styles";

const contentLoaderInitialValues = {
  width: 50,
  height: 30,
  x: 0,
  y: 0,
};

class Text extends React.Component {
  setNativeProps = nativeProps => {
    this._root.setNativeProps(nativeProps);
  };

  render() {
    const {
      weight,
      size,
      fontStyle,
      contentLoader,
      loading,
      children,
      ...rest
    } = this.props;

    return (
      <AnimatedText
        ref={ref => (this._root = ref)}
        fontWeight={weight}
        fontSize={size}
        fontStyle={fontStyle}
        {...rest}
      >
        {children}
      </AnimatedText>
    );
  }
}

Text.defaultProps = {
  size: Typography.text.size,
  color: Colors.text,
  fontStyle: "",
  weight: "normal",
  loading: false,
  contentLoader: {
    ...contentLoaderInitialValues,
  },
};

export default Text;
