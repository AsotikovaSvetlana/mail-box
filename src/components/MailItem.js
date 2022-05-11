import React from "react";
import styles from '../styles/MailItem.module.scss';
import moment from "moment";

const MailItem = ({ message }) => {
  return (
    <div className={styles.mail}>
      <div>
        {message.name}
      </div>
      <div>
        {message.message}
      </div>
      <div>
        {moment(message.date).format('DD.MM.YYYY')}
      </div>
    </div>
  )
}

export default MailItem;