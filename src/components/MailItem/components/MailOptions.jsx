import React from 'react';
import styles from '../styles/MailOptions.module.scss';
import { ReactComponent as Del } from '../../../assets/icons/icon-del.svg';
import MailSelect from './MailSelect';
import Hint from '../../Hint';

const MailOptions = ({ options, isOpen, value, hint, activeFolder, handleFormSubmit, handleChange, handleMailDelete, handleHint }) => {
  return (
    <div className={`${styles.options} ${isOpen ? `${styles.open}` : ''}`}>
      <form className={styles.options__form} onSubmit={handleFormSubmit}>
        <MailSelect
          value={value}
          list={options}
          handleChange={handleChange}
        />
        <button>Ok</button>
      </form>
      <div
        className={styles.options__del}
        onClick={handleMailDelete}
        onMouseEnter={() => handleHint(true)}
        onMouseLeave={() => handleHint(false)}
      >
        <Hint active={hint} type={activeFolder} />
        <Del />
      </div>
    </div>
  )
}

export default MailOptions;
