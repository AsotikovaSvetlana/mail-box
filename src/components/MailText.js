import React from "react";
import styles from '../styles/MailText.module.scss';
import moment from "moment";

const MailText = ({ mail }) => {
  return (
    mail
    ?
    <>
      <div className={styles.mail}>
        <div className={styles.mail__head}>
          <div>{mail.name}</div>
          <div>{moment(mail.date).format('DD.MM.YYYY')}</div>
        </div>
        <div className={styles.mail__body}>
          {mail.message}
        </div>
      </div>
    </>
    :
    null
  )
}

export default MailText;