import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from '../styles/MailList.module.scss';
import MailItem from "./MailItem";
import { messages } from '../data/messages';
import { getMessages } from "../store/actions/actionCreators";
import moment from "moment";

const MailList = () => {
  const { activeFolder } = useSelector(state => state.activeFolder);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages(messages));
  }, [dispatch])
  
  return (
    <div className={styles.list}>
      {
        messages
          .filter(item => item.userFolder === activeFolder || (item.type === activeFolder && !item.userFolder))
          .sort((a, b) => moment(b.date) - moment(a.date))
          .map(message => (
            <MailItem 
              key={message.id} 
              message={message} 
            />
          )
        )
      }
    </div>
  )
}

export default MailList;