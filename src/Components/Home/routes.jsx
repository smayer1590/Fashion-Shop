import React from "react";
import { Route, IndexRoute } from "react-router";

/**
 * Import all page components here
 */
import App from "./components/App";
import Men from "./components/MainPage";
import Women from "./components/SomePage";
import Accessories from "./components/SomeOtherPage";

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="/men" component={Men} />
    <Route path="/women" component={Women} />
    <Route path="/accessories" component={Accessories} />
  </Route>
);
