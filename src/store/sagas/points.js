import { call, put } from 'redux-saga/effects';

import api from 'Services/api';
import { Creators as PointActions } from 'store/ducks/points';

export function* addPointRequest(action) {
  const response = yield call(api.get, `/users/${action.payload.userGit}`);

  yield put(PointActions.addPointSuccess(response.data));
}
