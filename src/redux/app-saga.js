import {call, put, takeEvery} from 'redux-saga/effects';
import {setEnv} from 'src/redux/app-slice';
import {setProfile} from 'src/redux/persist-slice';
import APP_ACTION_TYPES from 'src/redux/app-saga-action-types';
import Api from 'src/utils/service';
import {API_URLS} from 'src/utils/constants';

// Saga Workers
export function* initSetEnvWorker(action) {
  yield put(setEnv(action.payload));
}

export function* initTableUpdateWorker(action) {
  try {
    const response = yield call(Api, {
      url: API_URLS.TABLE_UPDATE,
      params:action.payload.params,
    });
    action.payload.onSuccess(response);
  } catch (error) {
    console.log(error);
  }
}

export function* initTableGetWorker(action) {
  const url = API_URLS.TABLE_GET;
  url['URI'] = url['URI'].split('?')[0] + '?table_name='+action.payload.table_name+'&columnn_name='+action.payload.column_table+'&unique_column='+unique_column;

  try {
    const response = yield call(Api, {
      url: url,
    });
    action.payload.onSuccess(response);
  } catch (error) {
    console.log(error);
  }
}

// Saga Watchers
export function* initSetEnvWatcher() {
  yield takeEvery(APP_ACTION_TYPES.INIT_SET_ENV, initSetEnvWorker);
}
export function* initTableUpdateWatcher() {
  yield takeEvery(APP_ACTION_TYPES.INIT_TABLE_UPDATE, initTableUpdateWorker);
}
export function* initTableGetWatcher() {
  yield takeEvery(APP_ACTION_TYPES.INIT_TABLE_GET, initTableGetWorker);
}