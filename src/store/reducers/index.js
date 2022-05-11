import { combineReducers } from "redux";
import changeFolderReducer from "./changeFolderReducer";
import getMessagesReducer from "./getMessagesReducer";
import showModalReducer from './showModalReducer';

const reducer = combineReducers({
  activeFolder: changeFolderReducer,
  messages: getMessagesReducer,
  modal: showModalReducer,
});

export default reducer;
