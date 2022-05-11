import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from '../styles/Navigation.module.scss';
import NavItem from "./NavItem";
import { changeFolder } from "../store/actions/actionCreators";
import { FoldersApi } from "../api/FoldersApi";
import { getUserFolders } from "../store/actions/actionCreators";

const Navigation = () => {
  const [folders, setFolders] = useState([]);
  const { userFolders } = useSelector(state => state.userFolders);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(getUserFolders());
      const folders = await FoldersApi.getFolders();
      setFolders(folders);
    })();
  }, [dispatch])

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