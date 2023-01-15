import { FaGoogle, FaGithub } from 'react-icons/fa';
import classes from '../styles/register.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const submitHandler = (event) => {
    event.preventDefault();
    fetch('https://flipr-2e7c.onrender.com/register', {
      method: 'POST',
      body: { email, password },
    }).then((response) => response.json());

    router.push(`/dashboard/${email}`);
  };

  return (
    <div className={classes.loginSection}>
      <div className={classes.loginParentContainer}>
        <div className={classes.loginChildContainer}>
          <h2 className={classes.welcomeMessage}>Create an account</h2>
          <form>
            <label>Email</label>
            <input
              type="email"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            <label>password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
            <button type="submit" onClick={submitHandler}>
              Continue
            </button>
            <Link href="/login">
              <p className={classes.alreadyAccount}>Already have an account?</p>
            </Link>
            <p>
              By registering, you agree to our <span>Terms of Service</span> and{' '}
              <span>Privacy Policy</span>.
            </p>
          </form>
          <div>
            <p className={classes.orPara}>or</p>
            <Link href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=https%3A%2F%2Fflipr-2e7c.onrender.com%2Fsecret&scope=profile&client_id=1022897147206-dc1jkoih9etntvkq13r1ve27tntdgihc.apps.googleusercontent.com&service=lso&o2v=2&flowName=GeneralOAuthFlow">
              <p>
                Signup with <span>Google</span>
              </p>
            </Link>
            <Link href="https://github.com/login?client_id=3713ed9956c94ba511fc&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3D3713ed9956c94ba511fc%26redirect_uri%3Dhttps%253A%252F%252Fflipr-2e7c.onrender.com%252Fauth%252Fgithub%252Fsecret%26response_type%3Dcode">
              <p>
                Signup with <span>Github</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
