import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMailsList } from '../../store/reducers/mailsListSlice';
import MailList from '../../components/MailList';
import Loader from '../../components/Loader';

const HomePage = () => {
  const { filteredMails, loading } = useSelector(state => state.mailsList);
  const { activeFolder, defaultFolders, userFolders } = useSelector(state => state.folders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMailsList());
  }, [dispatch])

  if (!defaultFolders.folders.length || !userFolders.folders.length) {
    return null;
  }

  return (
    <>
      {
        !loading
        ?
        <MailList
          data={filteredMails}
          activeFolder={activeFolder}
        />
        :
        <Loader />
      }
    </>
  )
}

export default HomePage;
