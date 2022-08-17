import { configureStore } from '@reduxjs/toolkit';
import { MailBoxAPI } from '../api/MailBoxAPI';
import reducer from './reducers';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: MailBoxAPI,
      }
    })
});

export default store;
