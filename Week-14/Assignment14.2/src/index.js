import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ConnectedRoom } from "./ConnectedRoom";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRoom />
  </Provider>,
  document.getElementById("root")
);
