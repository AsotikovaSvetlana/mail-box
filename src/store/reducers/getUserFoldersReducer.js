import { 
  GET_USER_FOLDERS_REQ,
  GET_USER_FOLDERS_ERROR,
  GET_USER_FOLDERS_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  userFolders: [],
  loading: false,
  error: null
};

export default function getUserFoldersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_FOLDERS_REQ:
      return {
        ...state,
        loading: true,
        error: null
      }
    case GET_USER_FOLDERS_ERROR:
      const { error } = action.payload;
      return {
        ...state, 
        loading: false,
        error
      }
    case GET_USER_FOLDERS_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        userFolders: data,
        loading: false
      }
    default:
      return state;
  }
}