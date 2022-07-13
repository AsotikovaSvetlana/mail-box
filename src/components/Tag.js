import React from 'react';
import styles from '../styles/Tag.module.scss';

export default function Tag({ isRead }) {
  return (
    !isRead ? <div className={styles.tag}>New</div> : null
  )
}
