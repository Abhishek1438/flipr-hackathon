import { useState } from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  const [selected, setSelected] = useState('NSE');

  return (
    <nav className={classes.navbar}>
      <ul>
        <li
          className={selected === 'NSE' ? classes.selected : ''}
          onClick={() => setSelected('NSE')}
        >
          NSE
        </li>
        <li
          className={selected === 'Future' ? classes.selected : ''}
          onClick={() => setSelected('Future')}
        >
          Future
        </li>
        <li
          className={selected === 'Options' ? classes.selected : ''}
          onClick={() => setSelected('Options')}
        >
          Options
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
