import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from '../styles/AddFolderPopup.module.scss';
import { hideModal } from "../store/actions/actionCreators";

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

  return (
    <>
      <div className={`${styles.popup} ${showModal ? `${styles.active}` : ''}`}>
        <div className={styles.popup__body}>
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
            <button>Ок</button>
            <button onClick={handleModalClose}>Отменить</button>
          </div>
        </div>
        <div className={styles.popup__overlay} onClick={handleModalClose}></div>
      </div>
    </>
  )
}

export default AddFolderPopup;