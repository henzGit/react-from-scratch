import { takeLatest, put, call } from 'redux-saga/effects'
import { GET_STUFF} from './constants'
import {gotNoStuff, gotStuff} from './actions'
import api from './api'

function* getStuff() {
  try {
    console.log('trying to get stuff: ');
    const data = yield call(api.getStuff);
    console.log(data);
    yield put(gotStuff(data));
  } catch (error) {
    console.log('saga failed: ', error);
    yield put(gotNoStuff(error))
  }
}
export function* homePageSagas() {
  yield takeLatest(GET_STUFF, getStuff);
}