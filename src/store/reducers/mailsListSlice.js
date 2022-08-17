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
    error: false,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMailsList.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    builder.addCase(fetchMailsList.fulfilled, (state, action) => {
      state.loading = false;
      state.mails = action.payload;
    })
    builder.addCase(fetchMailsList.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
  }
})

export default mailsListSlice.reducer;
