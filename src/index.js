import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { ShopProvider } from "./components/shop-service-context";
import ErrorBoundary from "./components/error-boundary";
import ShopService from "./services";
import App from "./components/app";

import store from "./store";
const ss = new ShopService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <ShopProvider value={ss}>
        <Router>
          <App />
        </Router>
      </ShopProvider>
    </ErrorBoundary>
  </Provider>, document.getElementById("root")
);