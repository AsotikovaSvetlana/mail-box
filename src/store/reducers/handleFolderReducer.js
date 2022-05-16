import {
  SHOW_ADD_MODAL,
  SHOW_EDIT_MODAL,
  HIDE_MODAL,
  CHANGE_INPUT_MODAL,
} from '../actions/actionTypes';

const initialState = {
  showModal: false,
  nameFolder: {name: '', parentFolder: 'inbox'},
  title: '',
}

export default function handleFolderReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_EDIT_MODAL:
      const { folder } = action.payload;
      return {
        ...initialState,
        nameFolder: folder,
        showModal: true,
        title: 'Редактировать папку'
      }
    case SHOW_ADD_MODAL:
    return {
      ...initialState,
      showModal: true,
      title: 'Создать папку'
    }
    case HIDE_MODAL:
    return {
      ...initialState,
    }
    case CHANGE_INPUT_MODAL:
    const { value } = action.payload;
    return {
      ...state,
      nameFolder: {...state.nameFolder, name: value}
    }
    default:
      return state;
  }
}