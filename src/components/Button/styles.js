import { StyleSheet } from "react-native";

import styled from "styled-components/native";
import StyleGuide from "styleguide";

export const ButtonDelimiter = styled.View`
  overflow: hidden;
  margin: ${props => (props.verticalSpacing ? 10 : 0)}px 0
    ${props => (props.verticalSpacing || props.bottomSpacing ? 10 : 0)}px;
`;

export const ButtonContainer = styled.View`
  padding: 0 ${props => (props.shape !== "round" ? 40 : 0)}px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  border: ${props => (props.theme.border ? "2px" : "0px")} solid
    ${props => props.theme.border};
  background-color: ${props => props.theme.background};
`;

export const SquareButtonContainer = styled(ButtonContainer)`
  align-items: center;
  justify-content: center;
`;

export const RoundButtonContainer = styled(ButtonContainer)`
  align-items: center;
  justify-content: center;
`;

export default StyleSheet.create({
  iconContainer: {
    width: 66,
    height: 66,
    borderRadius: 33,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: StyleGuide.colors.secundaryLighten,
  },
});
