import { useContext } from 'react';
import { UserContext } from '@/contexts/UserContextProvider';
import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import token from '@/lib/token';
const HeaderWithAccess = () => {
  const { user, setIsLogin } = useContext(UserContext);

  const onLogout = () => {
    token.removeToken(ACCESS_TOKEN_KEY);
    setIsLogin(false);
    window.location.href = '#/login';
  };
  return (
    <>
      <li className="nav-item text-black navbar-text" style={{ marginTop: 4 }}>
        <span>
          Hello: <span className="font-bold">{user?.username} </span>{' '}
        </span>{' '}
      </li>
      <li className="nav-item nav-item text-black navbar-text">
        <button onClick={onLogout}>Logout</button>
      </li>
    </>
  );
};

export default HeaderWithAccess;
