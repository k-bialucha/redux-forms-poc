import { fromJS } from 'immutable';
import userDataFormReducer from '../reducer';

describe('userDataFormReducer', () => {
  it('returns the initial state', () => {
    expect(userDataFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
