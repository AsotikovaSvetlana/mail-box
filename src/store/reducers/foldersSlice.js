import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDefaultFolders = createAsyncThunk(
  'folders/fetchDefaultFolders',
  async function(_, { extra: MailBoxAPI }) {
    try {
      const result = await MailBoxAPI.getDefaultFolders();
      return result;
    } catch(err) {
      return err.message;
    }
  }
);

export const fetchUserFolders = createAsyncThunk(
  'folders/fetchUserFolders',
  async function(_, { extra: MailBoxAPI }) {
    try {
      const result = await MailBoxAPI.getUserFolders();
      return result;
    } catch(err) {
      return err.message;
    }
  }
);

export const addUserFolder = createAsyncThunk(
  'folders/addUserFolder',
  async function(data, { extra: MailBoxAPI, dispatch }) {
    try {
      await MailBoxAPI.addUserFolder(data);
      dispatch(fetchUserFolders());
      dispatch(hideModal());
    } catch(err) {
      return err.message;
    }
  }
);

export const deleteUserFolder = createAsyncThunk(
  'folders/deleteUserFolder',
  async function(id, { extra: MailBoxAPI, dispatch }) {
    try {
      await MailBoxAPI.deleteUserFolder(id);
      dispatch(fetchUserFolders());
    } catch(err) {
      return err.message;
    }
  }
);

const foldersSlice = createSlice({
  name: 'folders',
  initialState: {
    activeFolder: 'inbox',
    submenu: false,
    modal: {
      isOpen: false,
      title: '',
      newFolder: {name: '', parentFolder: 'inbox'},
    },
    defaultFolders: {
      folders: [],
      loading: false,
      error: false,
    },
    userFolders: {
      folders: [],
      loading: false,
      error: false,
    }
  },
  reducers: {
    changeActiveFolder: (state, action) => {
      state.activeFolder = action.payload;
    },
    toggleSubmenu: (state) => {
      state.submenu = !state.submenu;
    },
    showModal: (state, action) => {
      state.modal.isOpen = true;
      state.modal.title = action.payload.title;

      if (action.payload.folder) {
        state.modal.newFolder = {...state.modal.newFolder, ...action.payload.folder};
      }
    },
    hideModal: (state) => {
      state.modal.isOpen = false;
      state.modal.title = '';
      state.modal.newFolder = {name: '', parentFolder: 'inbox'};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDefaultFolders.pending, (state) => {
      state.defaultFolders.loading = true;
      state.defaultFolders.error = false;
    })
    builder.addCase(fetchDefaultFolders.fulfilled, (state, action) => {
      state.defaultFolders.loading = false;
      state.defaultFolders.folders = action.payload;
    })
    builder.addCase(fetchDefaultFolders.rejected, (state) => {
      state.defaultFolders.loading = false;
      state.defaultFolders.error = true;
    })
    builder.addCase(fetchUserFolders.pending, (state) => {
      state.userFolders.loading = true;
      state.userFolders.error = false;
    })
    builder.addCase(fetchUserFolders.fulfilled, (state, action) => {
      state.userFolders.loading = false;
      state.userFolders.folders = action.payload;
    })
    builder.addCase(fetchUserFolders.rejected, (state) => {
      state.userFolders.loading = false;
      state.userFolders.error = true;
    })
  }
})

export const { changeActiveFolder, toggleSubmenu, showModal, hideModal } = foldersSlice.actions;
export default foldersSlice.reducer;
