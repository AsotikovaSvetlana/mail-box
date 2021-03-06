import {
  GET_MESSAGES_REQ,
  GET_MESSAGES_ERROR,
  GET_MESSAGES_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: false,
  messages: [],
}

export default function getMessagesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGES_REQ:
      return {
        ...state,
        loading: true,
        error: false
      }
    case GET_MESSAGES_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    case GET_MESSAGES_SUCCESS:
      const { messages } = action.payload;
      return {
        ...state,
        loading: false,
        messages
      }
    default:
      return state;
  }
}