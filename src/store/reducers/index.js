import { combineReducers } from 'redux';
import foldersReducer from './foldersSlice';
import mailsListReducer from './mailsListSlice';
import mailReducer from './mailSlice';
import searchReducer from './searchSlice';

const reducer = combineReducers({
  folders: foldersReducer,
  mailsList: mailsListReducer,
  mail: mailReducer,
  search: searchReducer,
});

export default reducer;
