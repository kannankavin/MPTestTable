import {combineReducers} from 'redux';

import {configureStore} from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import saga from 'src/redux/redux-saga';

import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import APP_REDUCER from 'src/redux/app-slice';
import PERSIST_REDUCER from 'src/redux/persist-slice';

import packages from '../../package.json';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'reels',
  storage: AsyncStorage,
  whitelist: ['PERSIST_REDUCER'],
};

const rootReducer = combineReducers({
  PERSIST_REDUCER,
  APP_REDUCER,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [sagaMiddleware];

if (__DEV__ && packages.reduxLogger) {
  const logger = require('redux-logger').default;
  middleWares.push(logger);
}

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({thunk: false, serializableCheck: false}),
    ...middleWares,
  ],
});

sagaMiddleware.run(saga);

export const persistor = persistStore(store);

export default store;
