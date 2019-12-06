import AsyncStorage from "@react-native-community/async-storage";

export const UserStorageKeys = {
  TOKEN: "@user/Token",
  ID_USER: "@user/IdUser",
};

export const setToken = async token => {
  try {
    if (token) {
      await AsyncStorage.setItem(UserStorageKeys.TOKEN, `${token}`);
    } else {
      await AsyncStorage.removeItem(UserStorageKeys.TOKEN);
    }
  } catch (error) {
    console.tron.display({
      name: "ERROR",
      important: true,
      preview: `Error in storage: ${UserStorageKeys.TOKEN}`,
      value: { method: "setToken" },
    });
  }
};

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem(UserStorageKeys.TOKEN);
  } catch (error) {
    console.tron.display({
      name: "ERROR",
      important: true,
      preview: `Error in storage: ${UserStorageKeys.TOKEN}`,
      value: { method: "getToken" },
    });
  }
};

export const setIdUser = async idUser => {
  try {
    if (idUser) {
      await AsyncStorage.setItem(UserStorageKeys.ID_USER, `${idUser}`);
    } else {
      await AsyncStorage.removeItem(UserStorageKeys.ID_USER);
    }
  } catch (error) {
    console.tron.display({
      name: "ERROR",
      important: true,
      preview: `Error in storage: ${UserStorageKeys.ID_USER}`,
      value: { method: "setIdUser" },
    });
  }
};

export const getIdUser = async () => {
  try {
    return await AsyncStorage.getItem(UserStorageKeys.ID_USER);
  } catch (error) {
    console.tron.display({
      name: "ERROR",
      important: true,
      preview: `Error in storage: ${UserStorageKeys.ID_USER}`,
      value: { method: "getIdUser" },
    });
  }
};
