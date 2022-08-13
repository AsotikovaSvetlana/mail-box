import React from 'react';
import styles from './styles/NavList.module.scss';

const NavList = ({ children, isActive }) => {
  return (
    <ul className={`${styles.list} ${isActive ? `${styles.show}`: `${styles.hide}`}`}>
      {children}
    </ul>
  )
}

export default NavList;
