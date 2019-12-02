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
  login: (email, password) => async dispatch => {},
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
