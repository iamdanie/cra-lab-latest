import { all } from 'redux-saga/effects';
import contactsSaga from '@contacts/redux/sagas';

export default function* rootSaga(getState: any) {
  yield all([contactsSaga()]);
}
