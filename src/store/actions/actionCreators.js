import {
  CHANGE_ACTIVE_FOLDER,
  SHOW_ADD_MODAL,
  SHOW_EDIT_MODAL,
  HIDE_MODAL,
  CHANGE_INPUT_MODAL,
  GET_USER_FOLDERS_REQ,
  GET_USER_FOLDERS_ERROR,
  GET_USER_FOLDERS_SUCCESS,
  SET_DEFAULT_FOLDERS,
  REMOVE_USER_FOLDER_SUCCESS,
  SHOW_SUBMENU,
  GET_MESSAGES_REQ,
  GET_MESSAGES_ERROR,
  GET_MESSAGES_SUCCESS,
  GET_MAIL_REQ,
  GET_MAIL_ERROR,
  GET_MAIL_SUCCESS,
  EDIT_MAIL_STATUS,
} from './actionTypes';

export const changeFolder = (name) => (
  {type: CHANGE_ACTIVE_FOLDER, payload: {name}}
)

export const showAddModal = () => (
  {type: SHOW_ADD_MODAL}
)

export const showEditModal = (folder) => (
  {type: SHOW_EDIT_MODAL, payload: {folder}}
)

export const hideModal = () => (
  {type: HIDE_MODAL}
)

// export const sentFolder = () => async (dispatch, getState) => {
//   const { handleFolder: { nameFolder } } = getState();
//   if (!nameFolder.name.trim()) return;

//   try {
//     const response = await fetch(`${process.env.REACT_APP_URL}/user-folders`, {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(nameFolder),
//     });

//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     dispatch(hideModal());
//     // dispatch(getUserFolders());
//   } catch (e) {
//     console.log('error');
//   }
// }

export const changeInputModal = (value) => (
  {type: CHANGE_INPUT_MODAL, payload: {value}}
)

export const getUserFoldersRequest = () => (
  {type: GET_USER_FOLDERS_REQ}
)

export const getUserFoldersError = (error) => (
  {type: GET_USER_FOLDERS_ERROR, payload: {error}}
)

export const getUserFoldersSuccess = (data) => (
  {type: GET_USER_FOLDERS_SUCCESS, payload: {data}}
)

// export const getUserFolders = () => async (dispatch) => {
//   dispatch(getUserFoldersRequest());

//   try {
//     const response = await fetch(`${process.env.REACT_APP_URL}/user-folders`);

//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     const userFolders = await response.json();
//     dispatch(getUserFoldersSuccess(userFolders));
//   } catch (error) {
//     dispatch(getUserFoldersError(error.message));
//   }
// }

export const setDefaultFolders = (folders) => (
  {type: SET_DEFAULT_FOLDERS, payload: {folders}}
)

// export const getDefaultFolders = () => async (dispatch) => {
//   try {
//     const response = await fetch(`${process.env.REACT_APP_URL}/folders`);

//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     const folders = await response.json();
//     dispatch(setDefaultFolders(folders));
//   } catch (error) {
//     console.log('error');
//   }
// }

// export const removeUserFolderSuccess = () => (
//   {type: REMOVE_USER_FOLDER_SUCCESS}
// )

// export const removeUserFolder = (id) => async (dispatch) => {
//   try {
//     const response = await fetch(`${process.env.REACT_APP_URL}/user-folders/${id}`, {
//       method: 'DELETE',
//       headers: {'Content-Type': 'application/json'},
//     });

//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
    
//     dispatch(removeUserFolderSuccess());
//     // dispatch(getUserFolders());
//   } catch (error) {
//     console.log('error');
//   } 
// }

export const showSubmenu = () => (
  {type: SHOW_SUBMENU}
)

export const getMessagesRequest = () => (
  {type: GET_MESSAGES_REQ}
)

export const getMessagesError = (error) => (
  {type: GET_MESSAGES_ERROR, payload: {error}}
)

export const getMessagesSuccess = (messages) => (
  {type: GET_MESSAGES_SUCCESS, payload: {messages}}
)

// export const getMessages = () => async (dispatch) => {
//   dispatch(getMessagesRequest());

//   try {
//     const response = await fetch(`${process.env.REACT_APP_URL}/messages`);

//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     const messages = await response.json();
//     dispatch(getMessagesSuccess(messages));
//   } catch (error) {
//     dispatch(getMessagesError(error.message));
//   }
// }

export const getMailRequest = () => (
  {type: GET_MAIL_REQ}
)

export const getMailError = (error) => (
  {type: GET_MAIL_ERROR, payload: {error}}
)

export const getMailSuccess = (mail) => (
  {type: GET_MAIL_SUCCESS, payload: {mail}}
)

export const getMail = (id) => async (dispatch) => {
  dispatch(getMailRequest());

  try {
    const response = await fetch(`${process.env.REACT_APP_URL}/messages/${id}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const mail = await response.json();
    dispatch(getMailSuccess(mail));
  } catch (error) {
    dispatch(getMailError(error.message));
  }
}

export const editMailStatus = () => (
  {type: EDIT_MAIL_STATUS}
)

export const fetchEditMail = (mail) => async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_URL}/messages`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(mail),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
  } catch (e) {
    console.log("Edit mail error");
  }
}

export const deleteMail = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_URL}/messages/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // dispatch(getMessages());
  } catch (e) {
    console.log("Delete mail error");
  }
}

export const moveMail = (folder, message) => async (dispatch) => {
  let body;
  if (folder.type === 'userFolder') {
    body = {
      ...message,
      type: folder.type,
      userFolder: folder.name,
    }
  } else {
    body = {
      ...message,
      type: folder.type,
      userFolder: null,
    }
  }

  try {
    const response = await fetch(`${process.env.REACT_APP_URL}/messages`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // dispatch(getMessages());
  } catch (e) {
    console.log("Move mail error");
  }
}