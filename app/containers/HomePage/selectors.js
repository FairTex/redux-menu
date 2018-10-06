import { initialState } from './reducer';

export const selectMenu = state => {
  return state.getIn(['restaurant', 'menu'], initialState).toJS();
};
