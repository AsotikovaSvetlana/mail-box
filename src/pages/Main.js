import React from "react";
import MailList from "../components/MailList";
import Navigation from "../components/Navigation";
import ContentWrap from "../components/ContentWrap";

function Main() {
  return (
    <>
      <ContentWrap>
        <Navigation />
        <MailList />
      </ContentWrap>
    </>
  )
}

export default Main;
