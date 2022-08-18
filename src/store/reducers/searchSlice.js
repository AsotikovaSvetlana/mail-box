import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    isSearchOpen: false,
  },
  reducers: {
    showSearch: (state) => {
      state.isSearchOpen = !state.isSearchOpen;
    },
    changeInputValue: (state, action) => {
      state.query = action.payload;
    },
    clearSearch: (state) => {
      state.query = '';
      state.isSearchOpen = false;
    }
  }
})

export const { showSearch, changeInputValue, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
