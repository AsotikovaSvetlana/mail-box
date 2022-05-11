import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from '../styles/NavItem.module.scss';
import UserFolder from "./UserFolder";

const NavItem = ({ folder, handleClickFolder, userFolders }) => {
  const [active, setActive] = useState(false);
  const { activeFolder } = useSelector(state => state.activeFolder);

  return (
    <>
      {
        folder.type !== 'userFolders'
        ?
        <>
          <div 
            className={`${styles.item} ${activeFolder === folder.type ? `${styles.active}` : ''}`} 
            onClick={() => handleClickFolder(folder.type)}
          >
            {folder.name}
          </div>
        </>
        :
        <>
          <div 
            className={`${styles.item} ${activeFolder === folder.type ? `${styles.active}` : ''}`} 
            onClick={() => setActive(prevState => !prevState)}
          >
            <span
              className={`${active ? `${styles.transform}` : ''}`}
            >
              {'>'}
            </span>
            {folder.name}
          </div>
          <ul className={`${styles.item__userFolder} ${active ? `${styles.show}` : `${styles.hide}`}`}>
            {
              userFolders.map(item => <UserFolder item={item} activeFolder={activeFolder} key={item.id} handleClickFolder={handleClickFolder}/>)
            }
          </ul>
        </>
      }
    </>
  )
}

export default NavItem;