import { FC } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuth } from "../utils/auth";

export const PrivateRoute: FC<RouteProps> = (props) => {
  const auth = useAuth();
  return (
    <Route {...props}>
      {auth.token ? props.children : <Redirect to="/" />}
    </Route>
  );
};
