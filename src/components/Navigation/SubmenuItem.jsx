import React from 'react';
import NavItem from './NavItem';
import NavItemLink from './NavItemLink';
import NavList from './NavList';
import SubmenuItemHead from './SubmenuItemHead';

const SubmenuItem = ({ folder, userFolders = [], submenu, activeFolder, handleSubmenu, handleModal, handleClickFolder, handleRemoveFolder, handleEditFolder }) => {
  return (
    <>
      <SubmenuItemHead
        folder={folder}
        submenu={submenu}
        handleSubmenu={handleSubmenu}
        handleModal={handleModal}
      />
      <NavList isActive={submenu}>
        {
          userFolders.map(item => (
            <NavItem key={item.id}>
              <NavItemLink
                isUserFolder={true}
                folder={item}
                activeFolder={activeFolder}
                handleClickFolder={handleClickFolder}
                handleRemoveFolder={handleRemoveFolder}
                handleEditFolder={handleEditFolder}
              />
            </NavItem>
          ))
        }
      </NavList>
    </>
  )
}

export default SubmenuItem;
