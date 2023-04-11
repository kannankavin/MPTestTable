import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const initialState = {
  IS_AUTHORIZED: false,
  IS_INITIAL: false,
  TOKEN: null,
};

const PERSIST_SLICE = createSlice({
  name: 'PERSIST_REDUCER',
  initialState,
  reducers: {
    setIsAuthorized: (state, action) => {
      state.IS_AUTHORIZED = action.payload;
    },
    setInitialized: (state, action) => {
      state.IS_INITIAL = action.payload;
    },
    setToken: (state, action) => {
      state.TOKEN = action.payload;
    },
    reset: (state) => {
      return {
        ...initialState,
      };
    },
  },
});

export const {
  setIsAuthorized,
  setInitialized,
  setToken,
} = PERSIST_SLICE.actions;

export default PERSIST_SLICE.reducer;
