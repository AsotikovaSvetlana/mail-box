import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from '../styles/Navigation.module.scss';
import NavItem from "./NavItem";
import { changeFolder } from "../store/actions/actionCreators";

const Navigation = () => {
  const { userFolders } = useSelector(state => state.userFolders);
  const { folders } = useSelector(state => state.defaultFolders);
  const dispatch = useDispatch();

  const handleClickFolder = (name) => {
    dispatch(changeFolder(name));
  }

  return (
    <ul className={styles.nav}>
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
    </ul>
  )
}

export default Navigation;