import React from 'react';
import styles from '../styles/Modal.module.scss';

const ModalButtons = ({ handleModalClose }) => {
  return (
    <div className={styles.modal__buttons}>
      <button type="submit">Ок</button>
      <button type="button" onClick={handleModalClose}>Отменить</button>
    </div>
  )
}

export default ModalButtons;
