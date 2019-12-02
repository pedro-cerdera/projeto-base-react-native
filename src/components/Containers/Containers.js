import styled from "styled-components/native";
import StyleGuide from "styleguide";

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${StyleGuide.colors.white};
`;

export const DefaultSpacingContainer = styled.View`
  margin: 20px 20px ${props => (props.disableBottomSpacing ? 0 : 20)}px 20px;
  flex: 1;
`;

export const CardContainer = styled.TouchableOpacity.attrs(props => ({
  disabled: !props.onPress,
}))`
  border: 1px solid ${StyleGuide.colors.lightGrey};
  padding: 20px;
  flex: 1;
  border-radius: 10px;
`;
