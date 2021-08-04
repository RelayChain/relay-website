import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./layout/Header";
import HomePage from "./pages/Home";
import PartnersPage from "./pages/Partners";
import React from "react";
import { RedirectPathToHomeOnly } from './redirects';
import ScrollToTop from "./shared/components/ScrollToTop";
import Whitepaper from "./pages/Whitepaper";

export enum PublicRoutes {
  Home = "/",
  Whitepaper = "/whitepaper",
}

export default function Routes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-bg"></div>
      <div className="darken-bg"></div>
      <div className="darken-app"></div>
      <Header />
      <Switch>
        <Route exact path={PublicRoutes.Home}>
          <HomePage />
        </Route>
        <Route exact path={PublicRoutes.Whitepaper}>
          <Whitepaper />
        </Route>
        <Route component={RedirectPathToHomeOnly} />
      </Switch>
    </BrowserRouter>
  );
}
