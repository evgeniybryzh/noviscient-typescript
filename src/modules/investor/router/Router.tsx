import React from 'react';
import { Route, Switch, Redirect, Link, useHistory } from 'react-router-dom';
import { InvestorViewPosts } from '../views/Posts';
import { routes } from 'router';
import { useApp } from 'context';

export const InvestorRouterView = () => {
  const { logout } = useApp();
  const history = useHistory();

  const onLogout = () => {
    logout();
    history.push(routes.LOGIN);
  };
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to={routes.investor.POSTS}>Posts</Link>
          </li>
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        </ul>
      </header>
      <Switch>
        <Route exact path={routes.investor.HOME}>
          <Redirect to={routes.investor.POSTS} />
        </Route>
        <Route path={routes.investor.POSTS} component={InvestorViewPosts} />
      </Switch>
    </div>
  );
};

export default InvestorRouterView;
