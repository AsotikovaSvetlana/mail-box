import { combineReducers } from "redux";
import changeFolderReducer from "./changeFolderReducer";
import getMessagesReducer from "./getMessagesReducer";
import showModalReducer from './showModalReducer';
import getUserFoldersReducer from "./getUserFoldersReducer";
import editFolderReducer from "./editFolderReducer";

const reducer = combineReducers({
  activeFolder: changeFolderReducer,
  messages: getMessagesReducer,
  modal: showModalReducer,
  userFolders: getUserFoldersReducer,
  editFolder: editFolderReducer,
});

export default reducer;
