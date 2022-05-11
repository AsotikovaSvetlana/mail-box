import {
  SHOW_MODAL,
  HIDE_MODAL,
} from '../actions/actionTypes';

const initialState = {
  showModal: false,
}

export default function showModalReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true
      }
    case HIDE_MODAL:
    return {
      ...state,
      showModal: false
    }
    default:
      return state;
  }
}