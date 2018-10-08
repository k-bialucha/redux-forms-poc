import { call, takeLatest, select } from 'redux-saga/effects';
import request from 'utils/request';
import { SEND_DATA_FORM } from './constants';

import selector from './selectors';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/saga.js
}

export function* sendForm() {
  // Select username from store
  const formData = yield select(selector());
  const username = formData.values ? formData.values.username : 'empty';

  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  // Call our request helper (see 'utils/request')
  const repos = yield call(request, requestURL);

  console.log('Result:', repos);
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* send() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SEND_DATA_FORM, sendForm);
}
