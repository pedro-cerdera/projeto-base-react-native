const InputHelpers = {
  validateEmail: email => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
  validatePassword: (password, minLimit = 5) => {
    if (password && password.length >= minLimit) {
      return true;
    } else {
      return false;
    }
  },
  validateName: name => {
    if (name && name.length > 3) {
      return true;
    } else {
      return false;
    }
  },
  validateCpf: cpf => {
    if (cpf && cpf.length > 6) {
      return true;
    } else {
      return false;
    }
  },
  validateCep: cep => {
    if (cep && cep.length >= 4) {
      return true;
    } else {
      return false;
    }
  },
  validatePhone: phone => {
    if (phone && phone.length >= 10) {
      return true;
    } else {
      return false;
    }
  },
  validateBirthDate: birth_date => {
    if (birth_date && birth_date.length >= 8) {
      return true;
    } else {
      return false;
    }
  },
  validateString: (text, size) => {
    if (text && size != null && text.length >= size) {
      return true;
    } else {
      return false;
    }
  },
};

export const validateEmail = email => InputHelpers.validateEmail(email);

export const validatePassword = email => InputHelpers.validatePassword(email);

export default InputHelpers;
