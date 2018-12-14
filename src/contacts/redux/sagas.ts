import axios from 'axios';
import { call, takeEvery, put } from 'redux-saga/effects';
import { listContacts } from '../services/listContacts';
import {
  LIST_CONTACTS_STARTED,
  LIST_CONTACTS_SUCCEEDED,
  LIST_CONTACTS_FAILED
} from './actions';

export const pathToParameters = '/config/parameters.json';

export function* listContactsSaga() {
  try {
    const { data } = yield call(listContacts);
    yield put({
      type: LIST_CONTACTS_SUCCEEDED,
      payload: data
    });
  } catch (err) {
    yield put({
      type: LIST_CONTACTS_FAILED,
      payload: err.message
    });
  }
}

export default function* watcher() {
  yield takeEvery(LIST_CONTACTS_STARTED, listContactsSaga);
}
