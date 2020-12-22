import React, { FC } from 'react';
import { UserType } from 'api';
import { Link, generatePath } from 'react-router-dom';
import { map } from 'lodash';
import { routes } from 'router';

interface Props {
  users?: UserType[];
  loading?: boolean;
}
export const ManagerViewUsersDOM: FC<Props> = ({ users, loading }) => {
  return (
    <div>
      <hr />
      <code>{loading ? 'Laoding posts...' : 'Completed'}</code>
      <hr />
      <ul>
        {map(users, (user) => {
          return (
            <li key={user?.id}>
              <Link to={generatePath(routes.manager.USER, { uid: user?.id })}>
                <h4>{user?.name}</h4>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
