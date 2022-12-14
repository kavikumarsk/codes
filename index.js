import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { reducer } from "./redux/reducer";
import { createStore } from "redux";

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import Clscmp from "./navBar/Clscmp";
import Exe from "./Exe";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducer);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppRoutes />
        <Clscmp />
        <Exe />
      
           </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
