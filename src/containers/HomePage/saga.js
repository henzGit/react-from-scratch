import { takeLatest, put, call, select } from 'redux-saga/effects'
import { GET_STUFF} from './constants'
import {gotNoStuff, gotStuff} from './actions'
import api from './api'
import { selectCurrentUser } from './selectors';


function* getStuff() {
  try {
    const currentUser = yield select(selectCurrentUser);
    console.log('trying to get stuff for : ' + currentUser);
    const data = yield call(api.getStuff);
    yield put(gotStuff(data));
  } catch (error) {
    console.log('saga failed: ', error);
    yield put(gotNoStuff(error))
  }
}
export function* homePageSagas() {
  yield takeLatest(GET_STUFF, getStuff);
}