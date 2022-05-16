import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as Del } from '../assets/icons/icon-del.svg';
import { ReactComponent as Edit } from '../assets/icons/icon-edit.svg';
import styles from '../styles/UserFolder.module.scss';
import { getUserFolders } from "../store/actions/actionCreators";
import { showEditModal } from "../store/actions/actionCreators";

const UserFolder = ({ item, activeFolder, handleClickFolder }) => {
  const dispatch = useDispatch();

  const handleRemoveFolder = async (e) => {
    e.stopPropagation();
    try {
      const response = await fetch(`${process.env.REACT_APP_URL}/user-folders/${item.id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
      });
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      
      dispatch(getUserFolders());
    } catch (error) {
      console.log('error');
    } 
  }

  const handleEditFolder = async (e) => {
    e.stopPropagation();
    dispatch(showEditModal(item));
  }

  return (
    <li
      onClick={() => handleClickFolder(item.name)} 
      className={`${styles.item} ${activeFolder === item.name ? `${styles.active}` : ''}`}
    >
      {item.name}
      <div className={styles.item__icons}>
        <span onClick={handleEditFolder}>
          <Edit />
        </span>
        <span onClick={handleRemoveFolder}>
          <Del />
        </span>
      </div>
    </li>
  )
}

export default UserFolder;