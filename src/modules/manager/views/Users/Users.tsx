import { url, UserType } from 'api';
import React, { FC } from 'react';
import { useFetch } from 'react-async';
import { ManagerViewUsersDOM } from './Users.dom';

export const ManagerViewUsers: FC = () => {
  const { data, isLoading } = useFetch<UserType[]>(
    url.users,
    {},
    { json: true }
  );

  return <ManagerViewUsersDOM loading={isLoading} users={data} />;
};
