import React from "react";
import { useNavigate } from "react-router-dom";
import ContentWrap from "../components/ContentWrap";
import MailText from "../components/MailText";
import styles from '../styles/ContentWrap.module.scss';

function Mail() {
  const navigate = useNavigate();

  return (
    <>
      <ContentWrap>
        <div className={styles.button}>
          <div onClick={() => navigate('/')}>Go Back</div>
        </div>
        <MailText />
      </ContentWrap>
    </>
  )
}

export default Mail;