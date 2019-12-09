import { DropDownHolder } from "components";
import Resources from "resources";
import { UserStorage } from "storage";

import { Actions as RemoteConfigActions } from "./remoteConfig";

const initialState = {
  authData: null,
  isLoading: false,
  error: null,
};

const Types = {
  AUTH_SAVE: "@auth/SAVE",
  AUTH_SET_LOADING: "@auth/SET_LOADING",
  AUTH_SET_ERROR: "@auth/SET_ERROR",
  AUTH_RESET: "@auth/RESET",
};

export const Actions = {
  saveAuth: auth => ({ type: Types.AUTH_SAVE, payload: auth }),
  login: (cpf, password) => async (dispatch, getState) => {
    dispatch({ type: Types.AUTH_RESET });
    dispatch({ type: Types.AUTH_SET_LOADING, payload: true });
    const { data } = await Resources.User.login(cpf, password);

    if (!data.success) {
      dispatch({ type: Types.AUTH_SET_ERROR, payload: data });
      const errorsMessage = getState().RemoteConfigReducer.configs.login.errors;
      DropDownHolder.alertWithType(
        "error",
        "Error",
        errorsMessage[data.status] || errorsMessage.default
      );
    } else {
      dispatch(Actions.saveAuth(data));
      dispatch(RemoteConfigActions.reset());
    }

    UserStorage.setIdUser(data.id_user);
    UserStorage.setToken(data.token);

    dispatch({ type: Types.AUTH_SET_LOADING, payload: false });
  },
  loadStart: () => async (dispatch, getState) => {},
  logout: () => async (dispatch, getState) => {},
  reset: () => ({ type: Types.AUTH_RESET }),
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.AUTH_SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case Types.AUTH_SAVE:
      return {
        ...state,
        authData: action.payload,
      };
    case Types.AUTH_SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case Types.AUTH_RESET:
      return initialState;

    default:
      return { ...state };
  }
};
