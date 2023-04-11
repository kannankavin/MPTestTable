import {all} from 'redux-saga/effects';
import {
  initSetEnvWatcher,
  initTableGetWatcher, 
  initTableUpdateWatcher, 
} from 'src/redux/app-saga';


export default function* rootSaga() {
  yield all([
    initSetEnvWatcher(),
    initTableGetWatcher(),
    initTableUpdateWatcher(),
  ]);
}