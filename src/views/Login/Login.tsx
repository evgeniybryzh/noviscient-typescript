import { useApp, UserRole, ProfileType } from 'context';
import React, { FC } from 'react';
import { LoginViewDOM } from './Login.dom';

const fakeUser: ProfileType = {
  id: 37,
  name: 'James Lyons',
  email: 'nakarno@lisva.hu',
  role: 'manager',
};

export const LoginView: FC = () => {
  const { setLoading, setUser, loading } = useApp();

  const onSubmit = (role: UserRole) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUser({...fakeUser, role});
    }, 1000);
  };

  return <LoginViewDOM onSubmit={onSubmit} loading={loading} />;
};
