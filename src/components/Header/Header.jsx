import React from 'react';
import { ReactComponent as Moon } from '../../assets/icons/moon.svg';
import { ReactComponent as Sun } from '../../assets/icons/sun.svg';
import styles from './styles/Header.module.scss';
import Search from '../Search';

const Header = ({ darkMode, handleMode }) => {
  return (
    <header className={styles.header}>
      <Search />
      <div className={styles.header__switch} onClick={handleMode}>
        <div className={`${styles.header__switch_toggle} ${darkMode ? `${styles.darkMode}` : ''}`}>
          {darkMode ? <Moon /> : <Sun />}
        </div>
        <div className={`${styles.header__switch_icon} ${darkMode ? `${styles.darkMode}` : ''}`}>
          {darkMode ? <Sun /> : <Moon />}
        </div>
      </div>
    </header>
  )
}

export default Header;
