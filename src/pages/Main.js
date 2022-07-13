import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMessages, getDefaultFolders, getUserFolders } from '../store/actions/actionCreators';
import MailList from "../components/MailList";
import Navigation from "../components/Navigation";
import ContentWrap from "../components/ContentWrap";

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages());
    dispatch(getDefaultFolders());
    dispatch(getUserFolders());
  }, [dispatch])

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
