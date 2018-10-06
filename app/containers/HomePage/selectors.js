import { initialState } from './reducer';

export const selectMenu = state =>
  state.getIn(['restaurant', 'menu'], initialState).toJS();
