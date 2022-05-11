import {
  CHANGE_ACTIVE_FOLDER,
  GET_MESSAGES,
  SHOW_MODAL,
  HIDE_MODAL,
  GET_USER_FOLDERS_REQ,
  GET_USER_FOLDERS_ERROR,
  GET_USER_FOLDERS_SUCCESS,
  SHOW_EDIT_MODAL,
  HIDE_EDIT_MODAL,
  CHANGE_INPUT_EDIT,
} from './actionTypes';

export const changeFolder = (name) => (
  {type: CHANGE_ACTIVE_FOLDER, payload: {name}}
)

export const getMessages = (messages) => (
  {type: GET_MESSAGES, payload: {messages}}
)

export const showModal = () => (
  {type: SHOW_MODAL}
)

export const hideModal = () => (
  {type: HIDE_MODAL}
)

export const showEditModal = (folder) => (
  {type: SHOW_EDIT_MODAL, payload: {folder}}
)

export const hideEditModal = () => (
  {type: HIDE_EDIT_MODAL}
)

export const changeInputEdit = (value) => (
  {type: CHANGE_INPUT_EDIT, payload: {value}}
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