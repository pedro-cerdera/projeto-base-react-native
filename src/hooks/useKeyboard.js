import { useState, useEffect } from "react";
import { Keyboard } from "react-native";

const useKeyboard = (initialStatus = "closed") => {
  const [keyboardStatus, setKeyboardStatus] = useState(initialStatus);
  useEffect(() => {
    const keyboardWillShow = Keyboard.addListener(
      "keyboardWillShow",
      () => setKeyboardStatus("opened")
    );
    const keyboardDidShow = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardStatus("opened")
    );
    const keyboardWillHide = Keyboard.addListener(
      "keyboardWillHide",
      () => setKeyboardStatus("closed")
    );
    const keyboardDidHide = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardStatus("closed")
    );
    return () => {
      keyboardWillShow.remove();
      keyboardDidShow.remove();
      keyboardWillHide.remove();
      keyboardDidHide.remove();
    };
  }, []);

  return {
    keyboardStatus,
  };
};

export { useKeyboard };
