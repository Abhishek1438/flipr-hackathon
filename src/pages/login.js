import { FaGoogle, FaGithub } from 'react-icons/fa';
import classes from '../styles/login.module.css';
import Link from 'next/link';

export default function () {
  return (
    <div className={classes.loginParentContainer}>
      <div>
        <div className={classes.loginChildContainer}>
          <div className={classes.welcomeMessage}>
            <h2>Welcome back!</h2>
            <p>We're so excited to see you again!</p>
          </div>
          <form>
            <label>Email or phone number</label>
            <input type="text" required></input>
            <label>password</label>
            <input type="password" required></input>
            <p className={classes.forgotPass}>Forgot your password?</p>
            <button type="submit">Log In</button>
            <Link href="/register">
              <p>
                Need an account? <span>Register</span>
              </p>
            </Link>
          </form>
          <div>
            <p className={classes.orPara}>or</p>
            <Link href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=https%3A%2F%2Fflipr-2e7c.onrender.com%2Fsecret&scope=profile&client_id=1022897147206-dc1jkoih9etntvkq13r1ve27tntdgihc.apps.googleusercontent.com&service=lso&o2v=2&flowName=GeneralOAuthFlow">
              <p>
                <FaGoogle /> Login with <span>Google</span>
              </p>
            </Link>
            <Link href="https://github.com/login?client_id=3713ed9956c94ba511fc&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3D3713ed9956c94ba511fc%26redirect_uri%3Dhttps%253A%252F%252Fflipr-2e7c.onrender.com%252Fauth%252Fgithub%252Fsecret%26response_type%3Dcode">
              <p>
                <FaGithub /> Login with <span>Github</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
