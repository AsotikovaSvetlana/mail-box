import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/NavItemLink.module.scss';
import { ReactComponent as Del } from '../../assets/icons/icon-del.svg';
import { ReactComponent as Edit } from '../../assets/icons/icon-edit.svg';

const NavItemLink = ({ folder, activeFolder, isUserFolder, handleClickFolder, handleEditFolder, handleRemoveFolder }) => {
  const link = isUserFolder ? folder.id : folder.type;
  const args = isUserFolder ? folder.name : folder.type;
  const isActive = isUserFolder ? activeFolder === folder.name : activeFolder === folder.type;

  return (
    <Link
      to={`/folder/${link}`}
      className={`${isUserFolder ? `${styles.link__user}` : `${styles.link}`} ${isActive ? `${styles.active}` : ''}`} 
      onClick={() => handleClickFolder(args)}
    >
      {folder.name}
      {
        isUserFolder &&
        <div className={styles.link__icons}>
          <span onClick={(e) => handleEditFolder(e, folder)}>
            <Edit />
          </span>
          <span onClick={(e) => handleRemoveFolder(e, folder)}>
            <Del />
          </span>
        </div>
      }
    </Link>
  )
}

export default NavItemLink;
