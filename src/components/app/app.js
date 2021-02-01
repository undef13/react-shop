import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../header";

import { HomePage, CartPage } from "../pages";
import ShoppingCartTable from "../shopping-cart-table";

import "./app.css";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/cart" component={CartPage}></Route>
      </Switch>
      <ShoppingCartTable />
    </>
  );
};

export default App;
