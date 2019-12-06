import { Alert } from "react-native";
import Config from "react-native-config";

import _axios from "axios";

const apiUrl = Config.API_URL;

const axios = _axios.create({
  baseURL: apiUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Headers":
      "Accept, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Methods",
  },
});

export default async ({
  method,
  url,
  headers = undefined,
  params = undefined,
  data = undefined,
  token = undefined,
  onUploadProgress = undefined,
  onRequestFail = error => Alert.alert("Erro", error, [{ title: "OK" }]),
}) => {
  console.tron.display({
    name: "REQUEST",
    preview: `${method} request in URL: ${url}`,
    value: { method, url, params, data, token, onUploadProgress },
  });
  let response = { data: {} };
  try {
    response = await axios({
      url,
      method,
      headers: {
        ...headers,
        Authorization: token ? `JWT ${token}` : undefined,
      },
      params,
      data,
      onUploadProgress,
    });

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
  } catch (e) {
    response.data = {
      message: e.message,
      ...e.response,
    };
    onRequestFail(e.message);
  } finally {
    return response;
  }
};
