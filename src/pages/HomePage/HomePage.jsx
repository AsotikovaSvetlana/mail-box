import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMailsList } from '../../store/reducers/mailsListSlice';
import MailList from '../../components/MailList';
import Loader from '../../components/Loader';

const HomePage = () => {
  const { mails, loading } = useSelector(state => state.mailsList);
  const { activeFolder } = useSelector(state => state.folders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMailsList());
  }, [dispatch])

  return (
    <>
      {
        !loading
        ?
        <MailList
          data={mails}
          activeFolder={activeFolder}
        />
        :
        <Loader />
      }
    </>
  )
}

export default HomePage;
