import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from '../styles/FolderPopup.module.scss';
import { hideModal, changeInputModal, sentFolder } from "../store/actions/actionCreators";

const FolderPopup = () => {
  const [error, setError] = useState('');
  const { showModal, nameFolder, title } = useSelector(state => state.handleFolder);
  const { userFolders } = useSelector(state => state.userFolders);
  const dispatch = useDispatch();

  const handleModalClose = () => {
    setError('');
    dispatch(hideModal());
  }

  const handleInputChange = (e) => {
    const { value } = e.target;
    dispatch(changeInputModal(value));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nameFolder.name.trim()) {
      setError('Введите название папки');
    } else if (userFolders.find(item => item.name === nameFolder.name.trim())) {
      setError('Папка с таким именем уже существует');
    } else {
      setError('');
      dispatch(sentFolder());
    }
  }

  return (
    <div className={`${styles.popup} ${showModal ? `${styles.active}` : ''}`}>
      <form className={styles.popup__body} onSubmit={handleSubmit}>
        <p>{title}</p>
        <div>
          <label>
            Название
            <span className={styles.wrapper}>
              <input 
                type="text"
                onChange={handleInputChange}
                value={nameFolder.name}
              />
            </span>
          </label>
          <div className={styles.error}>{error}</div>
        </div>
        <div className={styles.buttons}>
          <button type="submit">Ок</button>
          <button type="button" onClick={handleModalClose}>Отменить</button>
        </div>
      </form>
      <div className={styles.popup__overlay} onClick={handleModalClose}></div>
    </div>
  )
}

export default FolderPopup;