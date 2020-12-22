import { UserRole } from 'context';
import React, { FC, useState } from 'react';

interface Props {
  loading: boolean;
  onSubmit: (role: UserRole) => void;
}

export const LoginViewDOM: FC<Props> = ({ loading, onSubmit }) => {
  const [role, setRole] = useState(UserRole.INVESTOR);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    onSubmit(role);
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input required type="text" />
        <input required type="password" />
        <br />
        <label>
          {UserRole.INVESTOR}
          <input
            required
            name="role"
            type="radio"
            value={UserRole.INVESTOR}
            checked={UserRole.INVESTOR === role}
            onChange={() => setRole(UserRole.INVESTOR)}
          />
        </label>
        <br />
        <label>
          {UserRole.MANAGER}
          <input
            required
            name="role"
            type="radio"
            value={UserRole.MANAGER}
            checked={UserRole.MANAGER === role}
            onChange={() => setRole(UserRole.MANAGER)}
          />
        </label>
        <br />
        <button disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
      </form>
    </div>
  );
};
