import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export const initialState = {
  ENV: 'dev',
  IS_SPLASH_LOADED: false,
  IS_LOGGED_OUT: false,
};

const APP_SLICE = createSlice({
  name: 'APP_REDUCER',
  initialState,
  reducers: {
    setEnv: (state, action) => {
      state.ENV = action.payload;
    },
    setIsSplashLoaded: (state, action) => {
      state.IS_SPLASH_LOADED = action.payload;
    },
    setIsLoggedOut: (state, action) => {
      state.IS_LOGGED_OUT = action.payload;
    },
    reset: state => {
      return {
        ...initialState,
        ENV: state.ENV,
        IS_SPLASH_LOADED: state.IS_SPLASH_LOADED,
      };
    },
  },
});

export const {
  setEnv,
  setIsSplashLoaded,
  setIsLoggedOut,
  reset,
} = APP_SLICE.actions;

export default APP_SLICE.reducer;
