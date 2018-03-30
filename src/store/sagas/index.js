import { all, takeLatest } from 'redux-saga/effects';

import { Types as PointTypes } from 'store/ducks/points';
import { addPointRequest } from './points';

export default function* rootSaga() {
  return yield all([
    takeLatest(PointTypes.ADD_REQUEST, addPointRequest),
  ]);
}
