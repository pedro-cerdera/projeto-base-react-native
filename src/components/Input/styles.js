import { Platform, StyleSheet } from "react-native";
import { TextInputMask } from "react-native-masked-text";

import styled from "styled-components/native";
import StyleGuide from "styleguide";

export const TextInput = styled.TextInput`
  background-color: white;
  font-size: 16px;
  border: 1px solid ${props =>
    props.error ? StyleGuide.colors.red : StyleGuide.colors.lightGrey};
  border-radius: 10px;
  padding: ${Platform.select({ ios: 12, android: 0 })}px 20px;
  /* padding-left: ${props => (props.icon ? 40 : 20)}px; */
  justify-content: center;
  margin: 5px 0 0px 0;
  font-family: ${StyleGuide.text.defaultFontFamily};
  ${props => (props.multiline ? "min-height: 63px;" : "height: 63px;")}
  max-height: 120px;
`;

export const MaskedTextInput = styled(TextInputMask)`
  background-color: white;
  font-size: 16px;
  border: 1px solid ${props =>
    props.error ? StyleGuide.colors.red : StyleGuide.colors.lightGrey};
  border-radius: 10px;
  padding: ${Platform.select({ ios: 12, android: 0 })}px 20px;
  /* padding-left: ${props => (props.icon ? 40 : 20)}px; */
  justify-content: center;
  margin: 5px 0 0px 0;
  font-family: ${StyleGuide.text.defaultFontFamily};
  ${props => (props.multiline ? "min-height: 63px;" : "height: 63px;")}
  max-height: 120px;
`;

export default StyleSheet.create({
  title: { marginLeft: 10 },
});
