import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './styles/MailPage.module.scss';
import MailDetails from '../../components/Mail/MailDetails';
import MailHead from '../../components/Mail/MailHead';
import Loader from '../../components/Loader';
import { fetchMail, editMail } from '../../store/reducers/mailSlice';

const MailPage = () => {
  const { id } = useParams();
  const { mail, loading } = useSelector(state => state.mail);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!mail || mail.isRead) return;
    dispatch(editMail({...mail, isRead: true}));
  }, [dispatch, mail]);

  useEffect(() => {
    dispatch(fetchMail(id));
  }, [dispatch, id]);
  
  return (
    <div className={styles.mail}>
      {
        !loading && mail
        ?
        <>
          <MailHead
            name={mail.name}
            date={mail.date}
          />
          <MailDetails text={mail.message} />
        </>
        :
        <Loader />
      }
    </div>
  )
}

export default MailPage;
