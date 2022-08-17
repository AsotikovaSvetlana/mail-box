import React from 'react';
import styles from '../styles/Modal.module.scss';

const ModalInput = ({ inputValue, error, handleInputChange }) => {
  return (
    <div className={styles.modal__form_input}>
      <label>
        Название
        <input 
          type="text"
          onChange={handleInputChange}
          value={inputValue}
        />
      </label>
      {error && <div className={styles.modal__error}>{error}</div>}
    </div>
  )
}

export default ModalInput;
