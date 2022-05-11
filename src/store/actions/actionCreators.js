import {
  CHANGE_ACTIVE_FOLDER,
  GET_MESSAGES,
  SHOW_MODAL,
  HIDE_MODAL,
} from './actionTypes';

export const changeFolder = (name) => (
  {type: CHANGE_ACTIVE_FOLDER, payload: {name}}
)

export const getMessages = (messages) => (
  {type: GET_MESSAGES, payload: {messages}}
)

export const showModal = () => (
  {type: SHOW_MODAL}
)

export const hideModal = () => (
  {type: HIDE_MODAL}
)