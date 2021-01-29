import React from "react";

import { ShopConsumer } from "../shop-service-context";

const withShopService = (mapMethodsToProps) => (Component) => {
  return (props) => {
    return (
      <ShopConsumer>
        {
          (ss) => {
            // const ssProps = mapMethodsToProps(ss);
            return (
              <Component {...props} ss={ss} />
            )
          }
        }
      </ShopConsumer>
    )
  }
}

export default withShopService;