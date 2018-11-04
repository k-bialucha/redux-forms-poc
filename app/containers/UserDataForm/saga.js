import { call, takeLatest, select } from 'redux-saga/effects';
import request from 'utils/request';
import { makeSelectFormValues } from 'utils/common/selectors';
import { SEND_DATA_FORM } from './constants';

export function* sendForm() {
  const formValues = yield select(makeSelectFormValues('userData'));
  const username = formValues.username || 'invalid';

  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  const repos = yield call(request, requestURL);

  console.log('Result:', repos);
}

export default function* send() {
  yield takeLatest(SEND_DATA_FORM, sendForm);
}
