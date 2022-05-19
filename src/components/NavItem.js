import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from '../styles/NavItem.module.scss';
import UserFolder from "./UserFolder";
import { showAddModal } from "../store/actions/actionCreators";
import { ReactComponent as Arrow } from '../assets/icons/arrow.svg';
import { ReactComponent as Plus } from '../assets/icons/plus.svg';

const NavItem = ({ folder, handleClickFolder, userFolders }) => {
  const [active, setActive] = useState(false);
  const { activeFolder } = useSelector(state => state.activeFolder);
  const dispatch = useDispatch();

  const handleModal = (e) => {
    dispatch(showAddModal());
    e.stopPropagation();
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
            onClick={() => setActive(prevState => !prevState)}
            onKeyDown={(e) => e.key === "Enter" && setActive(prevState => !prevState)}
            tabIndex="0"
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
    </li>
  )
}

export default NavItem;