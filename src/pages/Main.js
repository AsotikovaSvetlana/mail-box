import React from "react";
import MailList from "../components/MailList";
import Navigation from "../components/Navigation";
import styles from '../styles/Main.module.scss';

function Main() {
  return (
    <>
      <div className={styles.container}>
        <Navigation />
        <MailList />
      </div>
    </>
  )
}

export default Main;
