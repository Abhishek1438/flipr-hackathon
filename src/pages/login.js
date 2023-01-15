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
        </div>
      </div>
    </div>
  );
}
