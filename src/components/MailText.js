import React from "react";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import styles from '../styles/MailText.module.scss';
import moment from "moment";

const MailText = () => {
  const { messages } = useSelector(state => state.messages);
  const { id } = useParams();
  const { name, date, message } = messages.filter(item => item.id == id)[0];

  return (
    <>
      <div className={styles.mail}>
        <div className={styles.mail__head}>
          <div>{name}</div>
          <div>{moment(date).format('DD.MM.YYYY')}</div>
        </div>
        <div className={styles.mail__body}>
          {message}
        </div>
      </div>
    </>
  )
}

export default MailText;