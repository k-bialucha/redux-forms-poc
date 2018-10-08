import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userDataForm state domain
 */

const selectUserDataFormDomain = state => state.get('form', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by UserDataForm
 */

const makeSelectUserDataForm = () =>
  createSelector(
    selectUserDataFormDomain,
    substate => substate.toJS().userData,
  );

const makeSelectUserDataFormValues = () =>
  createSelector(
    selectUserDataFormDomain,
    substate => substate.toJS().userData,
  );

export default makeSelectUserDataFormValues;
export { selectUserDataFormDomain, makeSelectUserDataForm };
