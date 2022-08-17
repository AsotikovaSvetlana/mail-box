import React from 'react';
import styles from './styles/Tag.module.scss';

const Tag = ({ isRead }) => {
  return (
    !isRead ? <div className={styles.tag}>New</div> : null
  )
}

export default Tag;
