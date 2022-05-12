import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Mail from './pages/Mail';
import Main from './pages/Main';
import styles from './styles/App.module.scss';
import AddFolderPopup from './components/AddFolderPopup';
import EditFolderPopup from './components/EditFolderPopup';
import { getMessages, getDefaultFolders, getUserFolders } from './store/actions/actionCreators';
import { messages as data } from './data/messages';

function App() {
  const { activeFolder } = useSelector(state => state.activeFolder);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages(data));
    dispatch(getDefaultFolders());
    dispatch(getUserFolders());
  }, [dispatch])

  return (
    <>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Navigate to={`/folder/${activeFolder}`} />} />
          <Route path="/folder/:type" element={<Main />} />
          <Route path="/message/:id" element={<Mail />} />
        </Routes>
      </main>
      <AddFolderPopup />
      <EditFolderPopup />
    </>
  );
}

export default App;
