import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import useInputs from '@/lib/hooks/useInputs';
import routerMeta from '@/lib/routerMeta';
import token from '@/lib/token';
import { postLogin } from '@/repositories/users/usersRepository';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '@/contexts/UserContextProvider';
import { toast } from 'react-toastify';

const SignInPage = () => {
  const [signIndata, onChangeSignInData] = useInputs({ email: '', password: '' });
  const { setIsLogin, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const onLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postLogin(signIndata)
      .then((res) => {
        token.setToken(ACCESS_TOKEN_KEY, res.data.user.token);
        setIsLogin(token.getToken(ACCESS_TOKEN_KEY));
        setUser(res.data.user);
        navigate('/');
      })
      .catch((err) => {
        toast.error(
          Array.isArray(err.response.data.message) ? err.response.data.message[0] : err.response.data.message,
        );
      });
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link to={routerMeta.SignUpPage.path}>Not registered?</Link>
            </p>

            <form onSubmit={onLogin}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={signIndata.email}
                  onChange={onChangeSignInData}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                  name="password"
                  value={signIndata.password}
                  onChange={onChangeSignInData}
                />
              </fieldset>
              <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
