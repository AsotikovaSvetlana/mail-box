import React from 'react';
import styles from './styles/Hint.module.scss';

const Hint = ({ active, type }) => {
  return (
    active
    ?
    <div className={styles.hint}>
      <div className={styles.hint__arrow}></div>
      <div className={styles.hint__text}>
        {
          type === "deleted" ? "Press to delete mail" : "Press to add to deleted"
        }
      </div>
    </div>
    :
    null
  )
}

export default Hint;
