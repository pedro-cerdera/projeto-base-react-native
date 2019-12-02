import { useEffect, useRef, useCallback } from "react";
import { BackHandler } from "react-native";

const useBackHandler = (handleBackPress = false) => {
  const backHandler = useRef(null);

  const addListener = useCallback(handleBack => {
    backHandler.current = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBack
    );
  }, []);

  const removeListener = useCallback(() => {
    if (backHandler.current) {
      backHandler.current.remove();
    }
  }, []);

  useEffect(() => {
    if (handleBackPress) {
      removeListener();
      addListener(handleBackPress);
    }

    return () => {
      removeListener();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleBackPress]);

  return {
    addListener,
    removeListener,
  };
};

export { useBackHandler };
