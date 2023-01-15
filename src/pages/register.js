import classes from '../styles/register.module.css';
import Link from 'next/link';

const Register = () => {
  return (
    <div className={classes.loginParentContainer}>
      <div className={classes.loginChildContainer}>
        <h2 className={classes.welcomeMessage}>Create an account</h2>
        <form>
          <label>Email</label>
          <input type="email" required></input>
          <label>Username</label>
          <input type="text" required></input>
          <label>password</label>
          <input type="password" required></input>
          <label>Date of birth</label>
          <input type="date"></input>
          <div className={classes.checkboxContainer}>
            <input type="checkbox"></input>
            <label>
              (Optional) It's okay to send me emails with Discord updates, tips, and special offers.
              You can opt out at any time.
            </label>
          </div>
          <button type="submit">Continue</button>
          <Link href="/login">
            <p className={classes.alreadyAccount}>Already have an account?</p>
          </Link>
          <p>
            By registering you agree to Discord's <span>Terms of Service</span> and{' '}
            <span>Privacy Policy</span>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
