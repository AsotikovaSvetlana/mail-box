import React from 'react';
import styles from './styles/MailDetails.module.scss';

const MailDetails = ({ text }) => {
  return (
    <div className={styles.details}>
      {text}
    </div>
  )
}

export default MailDetails;
