import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles/ContentWrap.module.scss';

const ContentWrap = ({ children }) => {
  const { defaultFolders, userFolders } = useSelector(state => state.folders);

  if (!defaultFolders.folders.length || !userFolders.folders.length) {
    return (
      <div className={styles.container}>
        <div className={styles.container__load}>Loading...</div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default ContentWrap;
