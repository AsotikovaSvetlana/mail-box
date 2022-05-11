import React from 'react';
import { Routes, Route } from "react-router-dom";
import Mail from './pages/Mail';
import Main from './pages/Main';
import styles from './styles/App.module.scss';
import AddFolderPopup from './components/AddFolderPopup';
import EditFolderPopup from './components/EditFolderPopup';

function App() {
  return (
    <>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/message/:id" element={<Mail />} />
        </Routes>
      </main>
      <AddFolderPopup />
      <EditFolderPopup />
    </>
  );
}

export default App;
