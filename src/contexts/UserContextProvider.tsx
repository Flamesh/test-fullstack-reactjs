import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import token from '@/lib/token';
import { createContext, useState } from 'react';
import { IUser } from '@/repositories/users/usersRepository.param';
export const UserContext = createContext<any>(false);

const UserContextProvider = ({ children }: any) => {
  const [isLogin, setIsLogin] = useState(!!token.getToken(ACCESS_TOKEN_KEY));
  const [user, setUser] = useState<IUser>();

  return <UserContext.Provider value={{ isLogin, setIsLogin, user, setUser }}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
