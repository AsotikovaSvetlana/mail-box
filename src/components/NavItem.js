import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from '../styles/NavItem.module.scss';
import UserFolder from "./UserFolder";
import { showAddModal, showSubmenu } from "../store/actions/actionCreators";
import { ReactComponent as Arrow } from '../assets/icons/arrow.svg';
import { ReactComponent as Plus } from '../assets/icons/plus.svg';

const NavItem = ({ folder, handleClickFolder, userFolders }) => {
  const { activeFolder, submenu } = useSelector(state => state.activeFolder);
  const dispatch = useDispatch();

  const handleModal = (e) => {
    dispatch(showAddModal());
    e.stopPropagation();
  }

  const handleSubmenu = () => {
    dispatch(showSubmenu());
  }

  return (
    <li className={styles.item}>
      {
        folder.type !== 'userFolders'
        ?
        <Link
          to={`/folder/${folder.type}`}
          className={`${styles.item__link} ${activeFolder === folder.type ? `${styles.active}` : ''}`} 
          onClick={() => handleClickFolder(folder.type)}
        >
          {folder.name}
        </Link>
        :
        <>
          <div
            className={styles.item__link} 
            onClick={handleSubmenu}
            onKeyDown={(e) => e.key === "Enter" && handleSubmenu()}
            tabIndex="0"
          >
            <span
              className={`${submenu ? `${styles.transform}` : ''}`}
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
          <ul className={`${styles.item__userFolder} ${submenu ? `${styles.show}` : `${styles.hide}`}`}>
            {
              userFolders.map(item => <UserFolder item={item} activeFolder={activeFolder} key={item.id} handleClickFolder={handleClickFolder}/>)
            }
          </ul>
        </>
      }
    </li>
  )
}

export default NavItem;