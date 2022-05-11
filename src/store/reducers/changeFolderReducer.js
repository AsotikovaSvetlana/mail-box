import {
  CHANGE_ACTIVE_FOLDER,
} from '../actions/actionTypes';

const initialState = {
  activeFolder: 'inbox',
}

export default function changeFolderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ACTIVE_FOLDER:
      const { name } = action.payload;
      return {
        ...state,
        activeFolder: name,
      }
    default:
      return state;
  }
}