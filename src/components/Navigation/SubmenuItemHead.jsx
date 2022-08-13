import React from 'react';
import styles from './styles/SubmenuItemHead.module.scss';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';

const SubmenuItemHead = ({ folder, submenu, handleSubmenu, handleModal }) => {
  return (
    <div
      className={styles.submenu} 
      onClick={handleSubmenu}
      onKeyDown={(e) => e.key === "Enter" && handleSubmenu()}
      tabIndex="0"
    >
      <span className={`${submenu ? `${styles.transform}` : ''}`}>
        <Arrow />
      </span>
      {folder.name}
      <span
        className={styles.modal}
        onClick={handleModal}
      >
        <Plus />
      </span>
    </div>
  )
}

export default SubmenuItemHead;
