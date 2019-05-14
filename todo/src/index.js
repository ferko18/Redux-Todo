import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer from './Reducers'
//STEP 1
//Import provider and create store
import { Provider } from "react-redux";
import { createStore } from "redux";

//Create the Store 
const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
