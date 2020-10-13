import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppMenu from "../Components/AppMenu/AppMenu";

export default function RouteFile() {
  return (
    <Router>
      <AppMenu />
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/whatsapp"></Route>
        <Route path="/messanger"></Route>
        <Route path="/skype"></Route>
      </Switch>
    </Router>
  );
}
