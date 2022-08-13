import { combineReducers } from 'redux';
import foldersReducer from './foldersSlice';
import mailsListReducer from './mailsListSlice';
// import getMessagesReducer from "./getMessagesReducer";
// import getUserFoldersReducer from "./getUserFoldersReducer";
// import handleFolderReducer from "./handleFolderReducer";
// import getMailReducer from "./getMailReducer";

const reducer = combineReducers({
  folders: foldersReducer,
  mailsList: mailsListReducer,
  // messages: getMessagesReducer,
  // userFolders: getUserFoldersReducer,
  // handleFolder: handleFolderReducer,
  // mail: getMailReducer,
});

export default reducer;
