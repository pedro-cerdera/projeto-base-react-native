import Reducers from "reducers";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";

// import Reactotron from "../../ReactotronConfig";
import { middlewares } from "./middlewares";

const reducers = combineReducers({
  ...Reducers,
});

const compositions = [applyMiddleware(...middlewares)];

// if (__DEV__) {
//   compositions.push(Reactotron.createEnhancer());
// }

const composer = compose(...compositions);

export default createStore(reducers, composer);
