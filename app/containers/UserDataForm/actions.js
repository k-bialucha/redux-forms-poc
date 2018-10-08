/*
 *
 * UserDataForm actions
 *
 */

import { DEFAULT_ACTION, SEND_DATA_FORM } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function sendDataForm() {
  return {
    type: SEND_DATA_FORM,
  };
}
