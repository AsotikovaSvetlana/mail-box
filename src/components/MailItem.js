import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from '../styles/MailItem.module.scss';
import { Link } from "react-router-dom";
import moment from "moment";
import { ReactComponent as Arrow } from '../assets/icons/mail-arrow.svg';
import { ReactComponent as Del } from '../assets/icons/icon-del.svg';
import Tag from "./Tag";

const MailItem = ({ message }) => {
  const [value, setValue] = useState('Переместить...');
  const [isOpen, setOpen] = useState(false);
  const { activeFolder } = useSelector(state => state.activeFolder);
  const { userFolders } = useSelector(state => state.userFolders);
  const { folders } = useSelector(state => state.defaultFolders);

  const options = [{name: 'Переместить...'}, ...folders, ...userFolders].filter(item => item.name !== activeFolder && item.type !== activeFolder && item.type !== 'userFolders');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Update backend');
  }

  const handleMailDelete = () => {
    console.log('Update backend');
  }

  const handleShowOptions = (event) => {
    event.preventDefault();
    setOpen(prevState => !prevState);
  }

  return (
    <li className={styles.mail}>
      {'isRead' in message && <Tag isRead={message.isRead} />}
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
        <span className={`${isOpen ? `${styles.transform}` : ''}`} onClick={handleShowOptions}>
          <Arrow />
        </span>
      </Link>
      <div className={`${styles.mail__options} ${isOpen ? `${styles.open}` : ''}`}>
        <form className={styles.mail__options_form} onSubmit={handleFormSubmit}>
          <select value={value} onChange={handleChange}>
            {
              options?.map(option => (
                <option value={option.name} key={option.name}>{option.name}</option>
              ))
            }
          </select>
          <button>Ok</button>
        </form>
        <div className={styles.mail__options_del} onClick={handleMailDelete}>
          <Del />
        </div>
      </div>
    </li>
  )
}

export default MailItem;
