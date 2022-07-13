import { combineReducers } from "redux";
import changeFolderReducer from "./changeFolderReducer";
import getMessagesReducer from "./getMessagesReducer";
import getUserFoldersReducer from "./getUserFoldersReducer";
import handleFolderReducer from "./handleFolderReducer";
import getDefaultFoldersReducer from "./getDefaultFoldersReducer";
import getMailReducer from "./getMailReducer";

const reducer = combineReducers({
  activeFolder: changeFolderReducer,
  messages: getMessagesReducer,
  userFolders: getUserFoldersReducer,
  handleFolder: handleFolderReducer,
  defaultFolders: getDefaultFoldersReducer,
  mail: getMailReducer,
});

export default reducer;
