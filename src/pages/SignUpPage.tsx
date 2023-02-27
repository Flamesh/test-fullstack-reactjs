import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import useInputs from '@/lib/hooks/useInputs';
import routerMeta from '@/lib/routerMeta';
import token from '@/lib/token';
import { postRegister } from '@/repositories/users/usersRepository';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddBookPage = () => {
  const [signUpdata, onChangeSignUpData] = useInputs({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const onRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postRegister(signUpdata)
      .then((res) => {
        token.setToken(ACCESS_TOKEN_KEY, res.data.user.token);
        toast.success('Register success');
        navigate('/login');
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
            <h1 className="text-xs-center">Register</h1>
            <p className="text-xs-center">
              <Link to={routerMeta.SignInPage.path}>Have an account?</Link>
            </p>

            {/* <ul className="error-messages">
                <li>That email is already taken</li>
              </ul> */}

            <form onSubmit={onRegister}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Your Username"
                  name="username"
                  value={signUpdata.username}
                  onChange={onChangeSignUpData}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={signUpdata.email}
                  onChange={onChangeSignUpData}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                  name="password"
                  value={signUpdata.password}
                  onChange={onChangeSignUpData}
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

export default AddBookPage;
