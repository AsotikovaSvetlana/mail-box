import React from 'react';
import styles from './styles/NavItem.module.scss';

const NavItem = ({ children }) => {
  return (
    <li className={styles.item}>
      {children}
    </li>
  )
}

export default NavItem;
