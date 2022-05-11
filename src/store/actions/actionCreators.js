import {
  CHANGE_ACTIVE_FOLDER,
  GET_MESSAGES,
} from './actionTypes';

export const changeFolder = (name) => (
  {type: CHANGE_ACTIVE_FOLDER, payload: {name}}
)

export const getMessages = (messages) => (
  {type: GET_MESSAGES, payload: {messages}}
)