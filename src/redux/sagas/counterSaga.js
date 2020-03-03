import { put, takeLatest, call } from 'redux-saga/effects';
import { counterContants } from '../contants';

export default function* () {
  yield takeLatest(counterContants.SET_COUNTER_API, setCounter);
}

function* setCounter(action) {
  try {
    // const res = yield call(GetCounterApi);
    // console.log('res:', res);

    yield put({
      type: counterContants.SET_COUNTER_API_SUCCESS, payload: {
        counter: action.payload.counter
      }
    });
  } catch (error) {
    yield put({ type: counterContants.SET_COUNTER_API_FAILURE, error: error.message });
  }
}