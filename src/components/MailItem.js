import React from "react";
import styles from '../styles/MailItem.module.scss';
import { Link } from "react-router-dom";
import moment from "moment";

const MailItem = ({ message }) => {
  return (
    <li className={styles.mail}>
      <Link to={`/message/${message.id}`} className={styles.mail__link}>
        <span>
          {message.name}
        </span>
        <span>
          {message.message.slice(0, 70)}
        </span>
        <span>
          {moment(message.date).format('DD.MM.YYYY')}
        </span>
      </Link>
    </li>
  )
}

export default MailItem;
