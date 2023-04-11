import APP_ACTION_TYPES from 'src/redux/app-saga-action-types';

export const initSetEnv = ({ENV}) => ({
  type: 'APP_REDUCER/initSetEnv',
  payload: ENV,
});

export const initTableUpdate = ({param, onSuccess}) => ({
  type: 'APP_REDUCER/initTableUpdate',
  payload: {param, onSuccess},
});

export const initTableGet = ({table_name,column_name,unique_column,onSuccess}) => ({
  type: 'APP_REDUCER/initTableGet',
  payload: {table_name,column_name,unique_column,onSuccess},
});
