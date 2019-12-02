import React from "react";
import { View, TouchableOpacity } from "react-native";

import StyleGuide from "styleguide";

const base = "react-native-vector-icons";

const AntDesign = React.lazy(() => import(`${base}/AntDesign`));
const EvilIcons = React.lazy(() => import(`${base}/EvilIcons`));
const Entypo = React.lazy(() => import(`${base}/Entypo`));
const FontAwesome = React.lazy(() => import(`${base}/FontAwesome`));
const FontAwesome5 = React.lazy(() => import(`${base}/FontAwesome5`));
const Feather = React.lazy(() => import(`${base}/Feather`));
const Fontisto = React.lazy(() => import(`${base}/Fontisto`));
const Foundation = React.lazy(() => import(`${base}/Foundation`));
const Ionicons = React.lazy(() => import(`${base}/Ionicons`));
const MaterialIcons = React.lazy(() => import(`${base}/MaterialIcons`));
const MaterialCommunityIcons = React.lazy(() =>
  import(`${base}/MaterialCommunityIcons`)
);
const Octicons = React.lazy(() => import(`${base}/Octicons`));
const SimpleLineIcons = React.lazy(() => import(`${base}/SimpleLineIcons`));
const Zocial = React.lazy(() => import(`${base}/Zocial`));

const icons = {
  ad: AntDesign,
  ei: EvilIcons,
  en: Entypo,
  fa: FontAwesome,
  fa5: FontAwesome5,
  fe: Feather,
  fi: Fontisto,
  fo: Foundation,
  ion: Ionicons,
  md: MaterialIcons,
  mdc: MaterialCommunityIcons,
  oct: Octicons,
  sli: SimpleLineIcons,
  zo: Zocial,
};

const extractPrefix = name => ({
  prefix: name.split("-")[0],
  name: name
    .split("-")
    .slice(1)
    .join("-"),
});

const selectFont = iconName => {
  const { prefix, name } = extractPrefix(iconName);

  if (!Object.keys(icons).includes(prefix)) {
    console.warn("No prefix when choosing icon name, return default icon");
  }

  return {
    name: name,
    component: icons[prefix] || Ionicons,
  };
};

const Icon = ({
  name,
  containerStyle,
  hitSlop,
  onPress,
  rightSpacing,
  leftSpacing,
  horizontalSpacing,
  ...rest
}) => {
  const { name: processedName, component: IconFamily } = selectFont(name);

  let Container = View;

  if (onPress) {
    Container = TouchableOpacity;
  }

  return (
    <>
      <React.Suspense fallback={<View />}>
        <Container
          hitSlop={hitSlop}
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingRight: rightSpacing || horizontalSpacing ? 20 : 0,
            paddingLeft: leftSpacing || horizontalSpacing ? 20 : 0,
            ...containerStyle,
          }}
          onPress={onPress ? onPress : () => {}}
        >
          <IconFamily {...rest} name={processedName} />
        </Container>
      </React.Suspense>
    </>
  );
};

Icon.defaultProps = {
  color: StyleGuide.colors.text,
  containerStyle: {},
  rightSpacing: false,
};

export default Icon;
