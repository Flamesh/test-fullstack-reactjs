import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import routerMeta from '@/lib/routerMeta';
import { UserContext } from '@/contexts/UserContextProvider';
import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import token from '@/lib/token';
const HeaderWithAccess = () => {
  const { user } = useContext(UserContext);

  const onLogout = () => {
    token.removeToken(ACCESS_TOKEN_KEY);
    window.location.href = '#/login';
  };
  return (
    <>
      <li className="nav-item">
        <NavLink to={routerMeta.HomePage.path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          {routerMeta.HomePage.name}
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={routerMeta.NewBookPage.path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <i className="ion-compose"></i> Add a new book
        </NavLink>
      </li>

      <li className="nav-item text-black navbar-text">
        <span>Hello {user?.username} </span>{' '}
      </li>
      <li className="nav-item nav-item text-black navbar-text">
        <button onClick={onLogout}>Logout</button>
      </li>
    </>
  );
};

export default HeaderWithAccess;
