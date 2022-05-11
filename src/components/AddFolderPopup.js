import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from '../styles/AddFolderPopup.module.scss';
import { hideModal } from "../store/actions/actionCreators";
import { getUserFolders } from "../store/actions/actionCreators";

const AddFolderPopup = () => {
  const [value, setValue] = useState('');
  const { showModal } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setValue(e.target.value);
  }

  const handleModalClose = () => {
    setValue('');
    dispatch(hideModal());
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    try {
      const response = await fetch(`${process.env.REACT_APP_URL}/user-folders`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: value, parentFolder: 'inbox'}),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      setValue('');
      dispatch(hideModal());
      dispatch(getUserFolders());
    } catch (error) {
      console.log('error');
    }
  }

  return (
    <>
      <div className={`${styles.popup} ${showModal ? `${styles.active}` : ''}`}>
        <form className={styles.popup__body} onSubmit={handleSubmitForm}>
          <p>Создать папку</p>
          <div>
            <label>
              Название
              <span className={styles.wrapper}>
                <input 
                  type="text"
                  onChange={handleInputChange}
                  value={value}
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
    </>
  )
}

export default AddFolderPopup;