import React from 'react';
import styles from '../styles/Modal.module.scss';

const ModalTitle = ({ title }) => {
  return (
    <p className={styles.modal__form_title}>
      {title}
    </p>
  )
}

export default ModalTitle;
