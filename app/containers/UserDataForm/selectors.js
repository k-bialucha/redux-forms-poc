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

const selectFormDomain = state => state.get('form');

const makeSelectForm = () =>
  createSelector(selectFormDomain, substate => substate.toJS().userData);

const makeSelectFormValues = () =>
  createSelector(selectFormDomain, substate => {
    const form = substate.toJS();
    return form.userData ? form.userData.values : {};
  });

export {
  selectDataDomain,
  makeSelectForm,
  makeSelectFormValues,
  makeSelectStep,
};
