import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Del } from '../assets/icons/icon-del.svg';
import { ReactComponent as Edit } from '../assets/icons/icon-edit.svg';
import styles from '../styles/UserFolder.module.scss';
import { getUserFolders } from "../store/actions/actionCreators";
import { showEditModal } from "../store/actions/actionCreators";

const UserFolder = ({ item, activeFolder, handleClickFolder }) => {
  const dispatch = useDispatch();

  const handleRemoveFolder = async (e) => {
    e.preventDefault();
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
    e.preventDefault();
    e.stopPropagation();
    dispatch(showEditModal(item));
  }

  return (
    <li className={styles.item}>
      <Link
        to={`/folder/${item.name}`}
        className={`${styles.item__link} ${activeFolder === item.name ? `${styles.active}` : ''}`}
        onClick={() => handleClickFolder(item.name)}
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
      </Link>
    </li>
  )
}

export default UserFolder;
