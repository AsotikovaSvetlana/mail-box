import React from "react";
import styles from '../styles/MailItem.module.scss';
import { useNavigate } from "react-router-dom";
import moment from "moment";

const MailItem = ({ message }) => {
  const navigate = useNavigate();

  const handleMailClick = () => {
    navigate(`/message/${message.id}`);
  }

  return (
    <div className={styles.mail} onClick={handleMailClick}>
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