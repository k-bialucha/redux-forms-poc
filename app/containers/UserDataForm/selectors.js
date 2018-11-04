import { createSelector } from 'reselect';
import { initialState } from './reducer';
// import { initialState } from 'redux-form/immutable';
/**
 * Direct selector to the userDataForm state domain
 */

const selectDataDomain = state => state.get('userDataForm', initialState);

const makeSelectStep = () =>
  createSelector(selectDataDomain, substate => substate.toJS().userData);

// -----------------------------------------------------------------

export { selectDataDomain, makeSelectStep };
