import ReduxPromise from "redux-promise";
import createSageMiddleware from "redux-saga";
import ReduxThunk from "redux-thunk";

export const middlewares = [createSageMiddleware(), ReduxThunk, ReduxPromise];
