import React from "react";
import { TouchableOpacity, View } from "react-native";

import { Icon } from "..";

import { CustomText } from "styleguide";

import styles from "./styles";

const FormItem = ({ visible, onPress, value, containerStyle }) => {
  const opacity = { opacity: visible ? 1 : 0 };
  return (
    <View style={[containerStyle, opacity]}>
      <TouchableOpacity
        style={[styles.formItemContainer]}
        onPress={onPress}
        disabled={!visible}
      >
        <Icon name={"ad-caretleft"} />
        <CustomText type={"smallTitle"} style={styles.formText}>
          {value}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default FormItem;
