import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './styles/App.module.scss';
import Modal from '../Modal';
import Header from '../Header';
import ContentWrap from '../ContentWrap';
import Sidebar from '../Sidebar';
import HomePage from '../../pages/HomePage';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const { activeFolder, modal } = useSelector(state => state.folders);

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    isDarkMode ? body.classList.add('dark') : body.classList.remove('dark');
  }, [isDarkMode])

  const handleMode = () => {
    setDarkMode(prevMode => !prevMode);
  }

  return (
    <>
      <Header
        handleMode={handleMode}
        darkMode={isDarkMode}
      />
      <main className={styles.main}>
        <ContentWrap>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Navigate to={`/folder/${activeFolder}`} />} />
            <Route path="/folder/:type" element={<HomePage />} />
            {/* <Route path="/message/:id" element={<Mail />} /> */}
          </Routes>
        </ContentWrap>
      </main>
      <Modal />
    </>
  );
}

export default App;
