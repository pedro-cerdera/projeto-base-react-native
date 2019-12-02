import React from "react";
import { Provider } from "react-redux";

import store from "./store";

const Redux = ({ children }) => <Provider store={store}>{children}</Provider>;

export default Redux;
