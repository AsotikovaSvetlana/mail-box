import {
  SHOW_EDIT_MODAL,
  HIDE_EDIT_MODAL,
  CHANGE_INPUT_EDIT,
} from '../actions/actionTypes';

const initialState = {
  showEditModal: false,
  editFolder: {name: ''},
}

export default function editFolderReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_EDIT_MODAL:
      const { folder } = action.payload;
      return {
        ...state,
        editFolder: folder,
        showEditModal: true
      }
    case HIDE_EDIT_MODAL:
    return {
      ...state,
      showEditModal: false
    }
    case CHANGE_INPUT_EDIT:
    const { value } = action.payload;
    return {
      ...state,
      editFolder: {...state.editFolder, name: value}
    }
    default:
      return state;
  }
}