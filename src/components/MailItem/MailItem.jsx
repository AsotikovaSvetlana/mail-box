import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles/MailItem.module.scss';
import Tag from '../Tag';
import MailOptions from './components/MailOptions';
import MailPreview from './components/MailPreview';
import { deleteMail, moveMail } from '../../store/reducers/mailSlice';

const MailItem = ({ mail }) => {
  const [value, setValue] = useState('Переместить...');
  const [isOpen, setOpen] = useState(false);
  const [hint, setHint] = useState(false);

  const { activeFolder, userFolders, defaultFolders } = useSelector(state => state.folders);
  const dispatch = useDispatch();

  const options = [...defaultFolders.folders, ...userFolders.folders].filter(item => item.name !== activeFolder && item.type !== activeFolder && item.type !== 'userFolders');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const folder = options.find(el => el.name === value);
    dispatch(moveMail({folder, mail}));
  }

  const handleMailDelete = () => {
    dispatch(deleteMail(mail.id));
  }

  const handleShowOptions = (event) => {
    event.preventDefault();
    setOpen(prevState => !prevState);
  }

  const handleHint = (active) => {
    setHint(active);
  }

  return (
    <li className={styles.mail}>
      {'isRead' in mail && <Tag isRead={mail.isRead} />}
      <Link to={`/message/${mail.id}`} className={styles.mail__link}>
        <MailPreview
          mail={mail}
          isOpen={isOpen}
          handleShowOptions={handleShowOptions}
        />
      </Link>
      <MailOptions
        value={value}
        isOpen={isOpen}
        hint={hint}
        options={options}
        handleChange={handleChange}
        handleFormSubmit={handleFormSubmit}
        handleHint={handleHint}
        handleMailDelete={handleMailDelete}
      />
    </li>
  )
}

export default MailItem;
