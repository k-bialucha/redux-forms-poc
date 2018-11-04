import { createSelector } from 'reselect';

const selectFormDomain = state => state.get('form');

const makeSelectForm = formName =>
  createSelector(selectFormDomain, substate => substate.toJS()[formName]);

const makeSelectFormValues = formName =>
  createSelector(selectFormDomain, substate => {
    const form = substate.toJS();
    return form[formName] ? form[formName].values : {};
  });

export { makeSelectForm, makeSelectFormValues };
