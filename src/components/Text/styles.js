import { Animated } from "react-native";

import { scale } from "helpers";
import styled from "styled-components/native";
import { getStyle } from "styleguide/Typography";

export const AnimatedText = styled(Animated.Text)`
  background-color: transparent;
  font-family: ${props =>
    `Montserrat-${getStyle(props.fontWeight, props.fontStyle)}`};
  color: ${props => props.color};
  font-size: ${props => scale(props.fontSize)};
`;
