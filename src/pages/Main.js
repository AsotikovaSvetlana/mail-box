import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages, getDefaultFolders, getUserFolders } from '../store/actions/actionCreators';
import MailList from "../components/MailList";
import Navigation from "../components/Navigation";
import ContentWrap from "../components/ContentWrap";
import Loader from '../components/Loader';

function Main() {
  const { loading } = useSelector(state => state.messages);
  const { loading: loadingFolders } = useSelector(state => state.userFolders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages());
    dispatch(getDefaultFolders());
    dispatch(getUserFolders());
  }, [dispatch])

  return (
    <>
      <ContentWrap>
        {
          !loading || !loadingFolders
          ?
          <>
            <Navigation />
            <MailList />
          </>
          :
          <Loader />
        }
      </ContentWrap>
    </>
  )
}

export default Main;
