import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMailsList } from './mailsListSlice';

export const fetchMail = createAsyncThunk(
  'mail/fetchMail',
  async function(id, { extra: MailBoxAPI }) {
    try {
      const result = await MailBoxAPI.getMail(id);
      return result;
    } catch(err) {
      return err.message;
    }
  }
);

export const editMail = createAsyncThunk(
  'mail/editMail',
  async function(mail, { extra: MailBoxAPI }) {
    try {
      await MailBoxAPI.editMail(mail);
    } catch(err) {
      return err.message;
    }
  }
);

export const deleteMail = createAsyncThunk(
  'mail/deleteMail',
  async function(id, { extra: MailBoxAPI, dispatch }) {
    try {
      await MailBoxAPI.deleteMail(id);
      dispatch(fetchMailsList());
    } catch(err) {
      return err.message;
    }
  }
);

export const moveMail = createAsyncThunk(
  'mail/moveMail',
  async function({ folder, mail }, { extra: MailBoxAPI, dispatch }) {
    let data;
    if (folder.type === 'userFolder') {
      data = {
        ...mail,
        type: folder.type,
        userFolder: folder.name,
      }
    } else {
      data = {
        ...mail,
        type: folder.type,
        userFolder: null,
      }
    }

    try {
      await MailBoxAPI.editMail(data);
      dispatch(fetchMailsList());
    } catch(err) {
      return err.message;
    }
  }
);

const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    loading: false,
    error: false,
    mail: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMail.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    builder.addCase(fetchMail.fulfilled, (state, action) => {
      state.loading = false;
      state.mail = action.payload;
    })
    builder.addCase(fetchMail.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
  }
})

export default mailSlice.reducer;
