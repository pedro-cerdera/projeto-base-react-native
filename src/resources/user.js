import requestUtils from "utils/request";

export default {
  login(cpf, password) {
    return requestUtils({
      url: "/user/login",
      method: "POST",
      data: {
        cpf,
        password,
      },
    });
  },
  loadStart(token) {
    return requestUtils({
      url: "/user/load",
      method: "GET",
      token,
    });
  },
};
