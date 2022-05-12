import React from "react";
import ContentWrap from "../components/ContentWrap";
import MailText from "../components/MailText";
import Navigation from '../components/Navigation';

function Mail() {

  return (
    <>
      <ContentWrap>
        <Navigation />
        <MailText />
      </ContentWrap>
    </>
  )
}

export default Mail;