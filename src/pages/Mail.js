import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import ContentWrap from "../components/ContentWrap/ContentWrap";
import MailText from "../components/MailText";
// import Navigation from '../components/Navigation';
import { getMail, fetchEditMail } from '../store/actions/actionCreators';

function Mail() {
  const { id } = useParams();
  const { mail } = useSelector(state => state.mail);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!mail || mail.isRead) return;

    dispatch(fetchEditMail({...mail, isRead: true}));
  }, [dispatch, mail]);

  useEffect(() => {
    dispatch(getMail(id));
  }, [dispatch, id]);
  
  return (
    <>
      {/* <ContentWrap> */}
        {/* <Navigation /> */}
        {/* <MailText mail={mail} /> */}
      {/* </ContentWrap> */}
    </>
  )
}

export default Mail;