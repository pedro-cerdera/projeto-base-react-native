import { Platform, Dimensions } from "react-native";

export const iPhoneXSMaxHeight = 896;
export const iPhoneXSMaxWidth = 414;

export const iPhone5sWidth = 320;
export const iPhone5sHeight = 568;

export const iPhone6Width = 375;
export const iPhone6Height = 667;

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const PlatformHelpers = {
  isIphoneX: () => {
    const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get("window");
    if (Platform.OS === "web") {
      return false;
    }

    return (
      Platform.OS === "ios" &&
      ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
        (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT) ||
        ((D_HEIGHT === XSMAX_HEIGHT && D_WIDTH === XSMAX_WIDTH) ||
          (D_HEIGHT === XSMAX_WIDTH && D_WIDTH === XSMAX_HEIGHT)))
    );
  },
  isSmallDevice: () => Dimensions.get("screen").height <= 640,
};

export const isIphoneX = PlatformHelpers.isIphoneX();

export const isSmallDevice = PlatformHelpers.isSmallDevice();

export const DEVICE_WIDTH = Dimensions.get("window").width;
export const DEVICE_HEIGHT = Dimensions.get("window").height;

export default PlatformHelpers;
