import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles/Modal.module.scss';
import { addUserFolder, hideModal } from '../../store/reducers/foldersSlice';
import ModalTitle from './components/ModalTitle';
import ModalInput from './components/ModalInput';
import ModalButtons from './components/ModalButtons';

const Modal = () => {
  const [error, setError] = useState('');
  const [inputValue, setInputValue] = useState('');
  const { 
    modal: { isOpen, title, newFolder }, 
    userFolders: { folders } 
  } = useSelector(state => state.folders);
  
  const dispatch = useDispatch();

  const handleModalClose = () => {
    setError('');
    setInputValue('');
    dispatch(hideModal());
  }

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      setError('Введите название папки');
    } else if (folders.find(item => item.name === inputValue.trim())) {
      setError('Папка с таким именем уже существует');
    } else {
      dispatch(addUserFolder({...newFolder, name: inputValue}));
      setError('');
      setInputValue('');
    }
  }

  return (
    <div className={`${styles.modal} ${isOpen ? `${styles.active}` : ''}`}>
      <form className={styles.modal__form} onSubmit={handleSubmit}>
        <ModalTitle title={title} />
        <ModalInput
          error={error}
          inputValue={inputValue}
          handleInputChange={handleInputChange}
        />
        <ModalButtons handleModalClose={handleModalClose} />
      </form>
      <div className={styles.modal__overlay} onClick={handleModalClose}></div>
    </div>
  )
}

export default Modal;
