import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/Sidebar.module.scss';
import { ReactComponent as Menu } from '../../assets/icons/menu.svg';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import { 
  changeActiveFolder, toggleSubmenu, showModal, deleteUserFolder,
} from '../../store/reducers/foldersSlice';
import NavList from '../Navigation/NavList';
import NavItem from '../Navigation/NavItem';
import NavItemLink from '../Navigation/NavItemLink';
import SubmenuItem from '../Navigation/SubmenuItem';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { defaultFolders, userFolders, activeFolder, submenu } = useSelector(state => state.folders);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleActiveFolder = (name) => {
    dispatch(changeActiveFolder(name));
  }

  const handleModal = (e) => {
    e.stopPropagation();
    dispatch(showModal({title: 'Создать папку'}));
  }

  const handleSubmenu = () => {
    dispatch(toggleSubmenu());
  }

  const handleRemoveFolder = (e, folder) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(deleteUserFolder(folder.id));

    if (activeFolder === folder.name) {
      dispatch(changeActiveFolder('inbox'));
      navigate('/folder/inbox');
    }
  }

  const handleEditFolder = (e, folder) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(showModal({title: 'Редактировать папку', folder}));
  }

  const handleBurgerMenu = () => {
    setIsOpen(prevState => !prevState);
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__menu} onClick={handleBurgerMenu}>
        {isOpen ? <Close /> : <Menu />}
      </div>
      <nav className={`${styles.sidebar__nav} ${isOpen ? `${styles.open}` : ""}`}>
        <NavList isActive={true}>
          {
            defaultFolders.folders.map(item => (
              <NavItem key={item.id}>
                {
                  item.type !== 'userFolders'
                  ?
                  <NavItemLink
                    folder={item}
                    activeFolder={activeFolder}
                    handleClickFolder={handleActiveFolder}
                  />
                  :
                  <SubmenuItem
                    folder={item}
                    submenu={submenu}
                    userFolders={userFolders.folders}
                    activeFolder={activeFolder}
                    handleSubmenu={handleSubmenu}
                    handleModal={handleModal}
                    handleClickFolder={handleActiveFolder}
                    handleRemoveFolder={handleRemoveFolder}
                    handleEditFolder={handleEditFolder}
                  />
                }
              </NavItem>
            ))
          }
        </NavList>
      </nav>
    </aside>
  )
}

export default Sidebar;
