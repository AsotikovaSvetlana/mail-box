import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Mail from './pages/Mail';
import Main from './pages/Main';
import styles from './styles/App.module.scss';
import FolderPopup from './components/FolderPopup';
import { getMessages, getDefaultFolders, getUserFolders } from './store/actions/actionCreators';
import { messages as data } from './data/messages';
import Header from './components/Header';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const { activeFolder } = useSelector(state => state.activeFolder);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages(data));
    dispatch(getDefaultFolders());
    dispatch(getUserFolders());
  }, [dispatch])

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    isDarkMode ? body.classList.add('dark') : body.classList.remove('dark');
  }, [isDarkMode])

  const handleMode = () => {
    setDarkMode(prevMode => !prevMode);
  }

  return (
    <>
      <Header handleMode={handleMode} darkMode={isDarkMode} />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Navigate to={`/folder/${activeFolder}`} />} />
          <Route path="/folder/:type" element={<Main />} />
          <Route path="/message/:id" element={<Mail />} />
        </Routes>
      </main>
      <FolderPopup />
    </>
  );
}

export default App;
