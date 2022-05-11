import React from "react";
import styles from '../styles/UserFolder.module.scss';

const UserFolder = ({ item, activeFolder, handleClickFolder }) => {
  return (
    <li
      onClick={() => handleClickFolder(item.name)} 
      className={`${activeFolder === item.name ? `${styles.active}` : ''}`}
    >
      {item.name}
    </li>
  )
}

export default UserFolder;