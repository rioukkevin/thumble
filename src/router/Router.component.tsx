import React, { FC } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Login } from "../modules/Auth/Login.page";
import { Boards } from "../modules/Boards";
import { PrivateRoute } from "./PrivateRoute.component";
import { ROUTES } from "./routes";

export const Router: FC = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.root}>
          <Redirect to={ROUTES.public.login} />
        </Route>
        <Route exact path={ROUTES.public.login}>
          <Login />
        </Route>
        <PrivateRoute exact path={ROUTES.private.boards}>
          <Boards />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};
