import {
  SET_DEFAULT_FOLDERS,
} from '../actions/actionTypes';

const initialState = {
  folders: [],
}

export default function getDefaultFoldersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DEFAULT_FOLDERS:
      const { folders } = action.payload;
      return {
        ...state,
        folders
      }
    default:
      return state;
  }
}