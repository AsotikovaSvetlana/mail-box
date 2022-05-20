import {
  CHANGE_ACTIVE_FOLDER,
  REMOVE_USER_FOLDER_SUCCESS,
  SHOW_SUBMENU,
} from '../actions/actionTypes';

const initialState = {
  activeFolder: 'inbox',
  submenu: false,
}

export default function changeFolderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ACTIVE_FOLDER:
      const { name } = action.payload;
      return {
        ...state,
        activeFolder: name,
      }
    case REMOVE_USER_FOLDER_SUCCESS:
      return {
        ...state,
        activeFolder: 'inbox',
      }
    case SHOW_SUBMENU:
    return {
      ...state,
      submenu: !state.submenu,
    }
    default:
      return state;
  }
}