import Text from "components/Text/Text";
import { scale, fontScale } from "helpers";
import PropTypes from "prop-types";
import styled from "styled-components/native";

import Colors from "./Colors";
import Typography from "./Typography";

// ============================================================
// ======================== Typography ========================
// ============================================================
const BaseText = styled(Text)`
  background-color: transparent;
  text-align: ${props => props.align};
  margin: ${props => (props.verticalSpacing ? 10 : 0)}px
    ${props => (props.leftSpacing ? 10 : 0)}px
    ${props => (props.verticalSpacing || props.bottomSpacing ? 10 : 0)}px;

  text-shadow: 0 1px 2px ${props => (props.shadow ? "#000a" : "transparent")};
`;

BaseText.defaultProps = {
  align: "left",
};

export const CustomText = styled(BaseText).attrs(props => ({
  weight: props.weight || Typography[props.type].weight,
}))`
  font-size: ${props => fontScale(props.size || Typography[props.type].size)}px;
  line-height: ${props =>
    fontScale(props.lineHeight || Typography[props.type].lineHeight)}px;
`;

CustomText.defaultProps = {
  type: "text",
};

CustomText.propTypes = {
  type: PropTypes.oneOf([
    "title",
    "inputTitle",
    "mediumTitle",
    "smallTitle",
    "smallestTitle",
    "text",
    "caption",
    "button",
    "link",
  ]),
};

export const Link = styled(CustomText)`
  color: ${Colors.primary};
  text-align: ${props => (props.center ? "center" : "left")};
  text-decoration: ${props => (props.underline ? "underline" : "none")};
  text-decoration-color: ${Colors.primary};
  margin: ${props => (props.verticalSpacing ? 10 : 0)}px 0
    ${props => (props.verticalSpacing || props.bottomSpacing ? 10 : 0)}px;
`;

Link.defaultProps = {
  underline: false,
};

// ============================================================
// ======================== Components ========================
// ============================================================
export const Card = styled.View`
  background-color: #fff;
  box-shadow: 0 3px 3px ${`${Colors.grey}4d`};
  elevation: 2;
  border-radius: 10px;
  padding: 20px;
`;
