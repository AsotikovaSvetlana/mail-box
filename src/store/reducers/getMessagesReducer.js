import {
  GET_MESSAGES,
} from '../actions/actionTypes';

const initialState = {
  messages: [],
}

export default function getMessagesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGES:
      const { messages } = action.payload;
      return {
        ...state,
        messages
      }
    default:
      return state;
  }
}