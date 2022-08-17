import { combineReducers } from 'redux';
import foldersReducer from './foldersSlice';
import mailsListReducer from './mailsListSlice';
import mailReducer from './mailSlice';

const reducer = combineReducers({
  folders: foldersReducer,
  mailsList: mailsListReducer,
  mail: mailReducer,
});

export default reducer;
