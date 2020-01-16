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
      onRequestFail: () => {},
    });
  },
  recover(cpf) {
    return requestUtils({
      url: "/user/recover",
      method: "POST",
      data: {
        cpf,
      },
      onRequestFail: () => {},
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
