import {
  CHANGE_ACTIVE_FOLDER,
  GET_MESSAGES,
  SHOW_ADD_MODAL,
  SHOW_EDIT_MODAL,
  HIDE_MODAL,
  CHANGE_INPUT_MODAL,
  GET_USER_FOLDERS_REQ,
  GET_USER_FOLDERS_ERROR,
  GET_USER_FOLDERS_SUCCESS,
  SET_DEFAULT_FOLDERS,
} from './actionTypes';

export const changeFolder = (name) => (
  {type: CHANGE_ACTIVE_FOLDER, payload: {name}}
)

export const getMessages = (messages) => (
  {type: GET_MESSAGES, payload: {messages}}
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

export const sentFolder = () => async (dispatch, getState) => {
  const { handleFolder: { nameFolder } } = getState();
  if (!nameFolder.name.trim()) return;

  try {
    const response = await fetch(`${process.env.REACT_APP_URL}/user-folders`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(nameFolder),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    dispatch(hideModal());
    dispatch(getUserFolders());
  } catch (e) {
    console.log('error');
  }
}

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

export const getUserFolders = () => async (dispatch) => {
  dispatch(getUserFoldersRequest());

  try {
    const response = await fetch(`${process.env.REACT_APP_URL}/user-folders`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const userFolders = await response.json();
    dispatch(getUserFoldersSuccess(userFolders));
  } catch (error) {
    dispatch(getUserFoldersError(error.message));
  }
}

export const setDefaultFolders = (folders) => (
  {type: SET_DEFAULT_FOLDERS, payload: {folders}}
)

export const getDefaultFolders = () => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_URL}/folders`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const folders = await response.json();
    dispatch(setDefaultFolders(folders));
  } catch (error) {
    console.log('error');
  }
}