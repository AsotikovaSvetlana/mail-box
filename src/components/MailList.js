import React from "react";
import { useSelector } from "react-redux";
import styles from '../styles/MailList.module.scss';
import MailItem from "./MailItem";
import moment from "moment";

const MailList = () => {
  const { activeFolder } = useSelector(state => state.activeFolder);
  const { messages } = useSelector(state => state.messages);
  
  return messages && (
    <ul className={styles.list}>
      {
        messages
          .filter(item => item.userFolder ? (item.userFolder === activeFolder) : (item.type === activeFolder && !item.userFolder))
          .sort((a, b) => moment(b.date) - moment(a.date))
          .map(message => (
            <MailItem 
              key={message.id} 
              message={message} 
            />
          )
        )
      }
    </ul>
  )
}

export default MailList;