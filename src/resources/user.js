import requestUtils from "utils/request";

export default {
  login(email, password) {
    return requestUtils({
      url: "/users/login",
      method: "POST",
      data: {
        email,
        senha: password,
      },
    });
  },
  loadStart(token) {
    return requestUtils({
      url: "/users/load",
      method: "GET",
      token,
    });
  },
};
