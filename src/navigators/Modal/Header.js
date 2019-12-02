import StyleGuide from "styleguide";
import { getStyle } from "styleguide/Typography";

export const Header = {
  headerStyle: {
    elevation: 0,
    shadowColor: "transparent",
    borderBottomColor: "transparent",
    borderBottomWidth: 0,
    height: 60,
  },
  headerRightContainerStyle: {
    marginRight: 20,
  },
  headerLeftContainerStyle: {
    marginLeft: 20,
  },
  headerTitleStyle: {
    fontFamily: `Montserrat-${getStyle("bold", "")}`,
    color: StyleGuide.colors.text,
    fontSize: 17,
  },
};
