import React from "react";

import withShopService from "../hoc/with-shop-service";

import "./app.css";

const App = (props) => {
  console.log(props.ss.getProducts());
  return <div>Shop</div>;
};

export default withShopService()(App);
