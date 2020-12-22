import React from 'react';
import { Route, Switch, Redirect, Link, useHistory } from 'react-router-dom';
import { ManagerViewPosts } from '../views/Posts';
import { ManagerViewUsers } from '../views/Users';
import { routes } from 'router';
import { useApp } from 'context';

export const ManagerRouterView = () => {
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
            <Link to={routes.manager.POSTS}>Posts</Link>
          </li>
          <li>
            <Link to={routes.manager.USERS}>Users</Link>
          </li>
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        </ul>
      </header>
      <Switch>
        <Route exact path={routes.manager.HOME}>
          <Redirect to={routes.manager.POSTS} />
        </Route>
        <Route path={routes.manager.POSTS} component={ManagerViewPosts} />
        <Route path={routes.manager.USERS} component={ManagerViewUsers} />
      </Switch>
    </div>
  );
};

export default ManagerRouterView;
