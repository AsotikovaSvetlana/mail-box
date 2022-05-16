import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from '../styles/FolderPopup.module.scss';
import { hideModal, changeInputModal, sentFolder } from "../store/actions/actionCreators";

const FolderPopup = () => {
  const { showModal, nameFolder, title } = useSelector(state => state.handleFolder);
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(hideModal());
  }

  const handleInputChange = (e) => {
    const { value } = e.target;
    dispatch(changeInputModal(value));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(sentFolder());
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

export default FolderPopup;