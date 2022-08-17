import React from 'react';
import moment from 'moment';
import styles from '../styles/MailItem.module.scss';
import { ReactComponent as Arrow } from '../../../assets/icons/mail-arrow.svg';

const MailPreview = ({ mail, isOpen, handleShowOptions }) => {
  return (
    <>
      <span>
        {mail.name}
      </span>
      <span>
        {mail.message.slice(0, 70)}
      </span>
      <span>
        {moment(mail.date).format('DD.MM.YYYY')}
      </span>
      <span className={`${isOpen ? `${styles.transform}` : ''}`} onClick={handleShowOptions}>
        <Arrow />
      </span>
    </>
  )
}

export default MailPreview;
