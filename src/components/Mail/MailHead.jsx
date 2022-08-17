import React from 'react';
import moment from 'moment';
import styles from './styles/MailHead.module.scss';

const MailHead = ({ name, date }) => {
  return (
    <div className={styles.head}>
      <div>{name}</div>
      <div>{moment(date).format('DD.MM.YYYY')}</div>
    </div>
  )
}

export default MailHead;
