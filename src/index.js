import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import usersReducer from "./features/users/usersSlice";
import App from "./App";

const store = createStore(usersReducer);

ReactDOM.render(

  <Provider store={store}>
  <App />
  </Provider>,

  document.getElementById("root")
);