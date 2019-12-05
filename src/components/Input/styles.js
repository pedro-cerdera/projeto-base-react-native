import { Platform, StyleSheet } from "react-native";
import { TextInputMask } from "react-native-masked-text";

import styled from "styled-components/native";
import StyleGuide from "styleguide";

export const TextInput = styled.TextInput`
  background-color: white;
  font-size: 14px;
  border: 1px solid ${props =>
    props.error ? StyleGuide.colors.red : StyleGuide.colors.lightGrey};
  border-radius: 5px;
  padding: 10px;
  /* padding-left: ${props => (props.icon ? 40 : 20)}px; */
  justify-content: center;
  margin: 0px 0 0px 0;
  font-family: ${StyleGuide.text.defaultFontFamily};
  ${props => (props.multiline ? "min-height: 40px;" : "height: 40px;")}
  max-height: 120px;
`;

export const MaskedTextInput = styled(TextInputMask)`
  background-color: white;
  font-size: 14px;
  border: 1px solid ${props =>
    props.error ? StyleGuide.colors.red : StyleGuide.colors.lightGrey};
  border-radius: 5px;
  padding: 10px;
  /* padding-left: ${props => (props.icon ? 40 : 20)}px; */
  justify-content: center;
  margin: 0px 0 0px 0;
  font-family: ${StyleGuide.text.defaultFontFamily};
  ${props => (props.multiline ? "min-height: 40px;" : "height: 40px;")}
  max-height: 120px;
`;

export default StyleSheet.create({
  title: { marginLeft: 10, marginBottom: 5 },
});
