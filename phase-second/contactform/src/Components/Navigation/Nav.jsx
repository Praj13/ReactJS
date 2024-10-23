import React from 'react';
import styles from './Nav.module.css';  // Import your CSS module

function Nav() {
  return (
    <nav className={styles.nav}>  {/* Use styles.nav */}
      <div className={styles.logo}>  {/* Use styles.logo */}
        <img src="./images/logo.png" alt="" />
      </div>
      <div className={styles.links}>  {/* Use styles.links */}
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
