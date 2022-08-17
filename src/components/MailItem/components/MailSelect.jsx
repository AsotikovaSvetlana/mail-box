import React from 'react';
import styles from '../styles/MailSelect.module.scss';

const MailSelect = ({ value, list = [], handleChange }) => {
  return (
    <select
      className={styles.select}
      value={value}
      onChange={handleChange}
    >
      <option disabled>Переместить...</option>
      {
        list.map(item => (
          <option value={item.name} key={item.name}>{item.name}</option>
        ))
      }
    </select>
  )
}

export default MailSelect;
