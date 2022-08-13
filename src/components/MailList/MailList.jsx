import React from 'react';
import moment from 'moment';
import styles from './styles/MailList.module.scss';
import MailItem from '../../components/MailItem';

const MailList = ({ data = [], activeFolder }) => {
  return (
    <ul className={styles.mails}>
      {
        data
          .filter(item => item.userFolder ? (item.userFolder === activeFolder) : (item.type === activeFolder && !item.userFolder))
          .sort((a, b) => moment(b.date) - moment(a.date))
          .map(item => (
            <MailItem 
              key={item.id} 
              mail={item} 
            />
          )
        )
      }
    </ul>
  )
}

export default MailList;
