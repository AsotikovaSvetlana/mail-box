import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from '../styles/NavItem.module.scss';
import UserFolder from "./UserFolder";
import { showModal } from "../store/actions/actionCreators";
import { ReactComponent as Arrow } from '../assets/icons/arrow.svg';
import { ReactComponent as Plus } from '../assets/icons/plus.svg';

const NavItem = ({ folder, handleClickFolder, userFolders }) => {
  const [active, setActive] = useState(false);
  const { activeFolder } = useSelector(state => state.activeFolder);
  const dispatch = useDispatch();

  const handleModal = (e) => {
    dispatch(showModal());
    e.stopPropagation();
  }

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