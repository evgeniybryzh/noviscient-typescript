import { useApp } from 'context';
import React, { FC } from 'react';
import { Route, Switch, Redirect, RouteProps } from 'react-router-dom';
import { LoginView } from 'views/Login';
import { ManagerRouterView } from 'modules/manager/router';
import { InvestorRouterView } from 'modules/investor/router';
import { routes, RouteTypes } from './types';

const PrivateRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const { isAuth } = useApp();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: RouteTypes.LOGIN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export const RouterView = () => {
  const { isAuth, user } = useApp();
  return (
    <Switch>
      <Route exact path={routes.HOME}>
        {isAuth ? (
          <Redirect to={`/${user?.role}`} />
        ) : (
          <Redirect to={routes.LOGIN} />
        )}
      </Route>
      <Route path={routes.LOGIN}>
        {isAuth ? <Redirect to={routes.HOME} /> : <LoginView />}
      </Route>
      <PrivateRoute path={routes.manager.HOME}>
        <ManagerRouterView />
      </PrivateRoute>
      <PrivateRoute path={routes.investor.HOME}>
        <InvestorRouterView />
      </PrivateRoute>
    </Switch>
  );
};

export default RouterView;
