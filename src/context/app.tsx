import React, {
  useState,
  useContext,
  createContext,
  FC,
  Dispatch,
  useEffect,
} from 'react';

export enum UserRole {
  MANAGER = 'manager',
  INVESTOR = 'investor',
}

export type UserRoleType = 'manager' | 'investor';

export interface ProfileType {
  id: number;
  name: string;
  email: string;
  role: UserRoleType;
}

interface AppContextType {
  user?: ProfileType;
  isAuth?: boolean;
  loading: boolean;
  setUser: Dispatch<React.SetStateAction<ProfileType | undefined>>;
  setLoading: Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
}

export const AppContext = createContext<AppContextType>({
  loading: false,
  setUser: () => undefined,
  setLoading: () => undefined,
  logout: () => undefined,
});

export const useApp = () => useContext(AppContext);

export const AppContextProvider: FC = ({ children }) => {
  const cachedUser = localStorage.getItem('user');
  const [user, setUser] = useState<AppContextType['user']>(
    cachedUser ? JSON.parse(cachedUser) : undefined
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const logout = () => setUser(undefined);

  return (
    <AppContext.Provider
      value={{ user, loading, isAuth: !!user, setUser, setLoading, logout }}
    >
      {children}
    </AppContext.Provider>
  );
};
