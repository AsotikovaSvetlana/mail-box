import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMailsList = createAsyncThunk(
  'folders/fetchMailsList',
  async function(_, { extra: MailBoxAPI }) {
    try {
      const result = await MailBoxAPI.getMailsList();
      return result;
    } catch(err) {
      return err.message;
    }
  }
);

const mailsListSlice = createSlice({
  name: 'mailsList',
  initialState: {
    mails: [],
    filteredMails: [],
    error: false,
    loading: false,
  },
  reducers: {
    filterMails: (state, action) => {
      const query = action.payload.toLowerCase();
      const filteredMails = state.mails.filter(item => item.email.toLowerCase().includes(query) || item.name.toLowerCase().includes(query) || item.message.toLowerCase().includes(query));
      state.filteredMails = filteredMails;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMailsList.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    builder.addCase(fetchMailsList.fulfilled, (state, action) => {
      state.loading = false;
      state.mails = action.payload;
      state.filteredMails = action.payload;
    })
    builder.addCase(fetchMailsList.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
  }
})

export const { filterMails } = mailsListSlice.actions;
export default mailsListSlice.reducer;
