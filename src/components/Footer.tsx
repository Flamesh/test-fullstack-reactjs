import { Link } from 'react-router-dom';
import Logo from '@/assets/icons/logo.jpeg';
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Link to="/" className="logo-font">
          <img src={Logo} alt="logo" width={100} height="auto" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
