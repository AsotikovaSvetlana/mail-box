import {
  GET_MAIL_REQ,
  GET_MAIL_ERROR,
  GET_MAIL_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: false,
  mail: null,
}

export default function getMailReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MAIL_REQ:
      return {
        ...state,
        loading: true,
        error: false,
        mail: null
      }
    case GET_MAIL_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    case GET_MAIL_SUCCESS:
      const { mail } = action.payload;
      return {
        ...state,
        loading: false,
        mail
      }
    default:
      return state;
  }
}