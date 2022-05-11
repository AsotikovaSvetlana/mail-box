import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from '../styles/EditFolderPopup.module.scss';
import { hideEditModal, changeInputEdit, getUserFolders } from "../store/actions/actionCreators";

const EditFolderPopup = () => {
  const { showEditModal, editFolder } = useSelector(state => state.editFolder);
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(hideEditModal());
  }

  const handleInputChange = (e) => {
    const { value } = e.target;
    dispatch(changeInputEdit(value));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editFolder.name.trim()) return;

    try {
      const response = await fetch(`${process.env.REACT_APP_URL}/user-folders`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(editFolder),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      dispatch(hideEditModal());
      dispatch(getUserFolders());
    } catch (e) {
      console.log('error');
    }
  }

  return (
    <div className={`${styles.popup} ${showEditModal ? `${styles.active}` : ''}`}>
      <form className={styles.popup__body} onSubmit={handleSubmit}>
        <p>Редактировать папку</p>
        <div>
          <label>
            Название
            <span className={styles.wrapper}>
              <input 
                type="text"
                onChange={handleInputChange}
                value={editFolder.name}
              />
            </span>
          </label>
        </div>
        <div className={styles.buttons}>
          <button type="submit">Ок</button>
          <button onClick={handleModalClose}>Отменить</button>
        </div>
      </form>
      <div className={styles.popup__overlay} onClick={handleModalClose}></div>
    </div>
  )
}

export default EditFolderPopup;