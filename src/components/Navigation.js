import React from "react";
import { useDispatch } from "react-redux";
import styles from '../styles/Navigation.module.scss';
import NavItem from "./NavItem";
import { changeFolder } from "../store/actions/actionCreators";
import { folders } from '../data/folders';
import { userFolders } from '../data/userFolders';

const Navigation = () => {
  const dispatch = useDispatch();

  const handleClickFolder = (name) => {
    dispatch(changeFolder(name));
  }

  return (
    <div className={styles.nav}>
      {
        folders.map(item => (
          <NavItem 
            key={item.id} 
            folder={item}
            userFolders={userFolders}
            handleClickFolder={handleClickFolder}
          />
        ))
      }
    </div>
  )
}

export default Navigation;