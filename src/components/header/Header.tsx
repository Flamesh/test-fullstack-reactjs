import { Link } from 'react-router-dom';
import HeaderWithAccess from './HeaderWithAccess';
import HeaderWithoutAccess from './HeaderWithoutAccess';
import { useContext } from 'react';
import { UserContext } from '@/contexts/UserContextProvider';
import Logo from '@/assets/icons/logo.jpeg';
import './Header.css';
const Header = () => {
  const { isLogin } = useContext(UserContext);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to={isLogin ? '/' : '/login'} className="navbar-brand">
          <img src={Logo} alt="logo" width={100} height="auto" />
        </Link>
        <ul className="nav navbar-nav pull-xs-right">{isLogin ? <HeaderWithAccess /> : <HeaderWithoutAccess />}</ul>
      </div>
    </nav>
  );
};

export default Header;
