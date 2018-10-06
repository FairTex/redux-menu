import { ADD_NODE, EDIT_NODE, SET_MENU } from './constants';
import { fromJS } from 'immutable';

export const initialState = fromJS({
  menu: [],
});

const loop = (menu, parentId, itemToAdd) =>
  menu.map(item => {
    if (item.get('id') === parentId) {
      return item.update('children', prev => prev.push(fromJS(itemToAdd)));
    }

    if (item.get('children') && item.get('children').size > 0) {
      return item.update('children', prev => loop(prev, parentId, itemToAdd));
    }

    return item;
  });

const editLoop = (menu, node) =>
  menu.map(item => {
    if (item.get('id') === node.id) {
      return fromJS(node);
    }

    if (item.get('children') && item.get('children').size > 0) {
      return item.update('children', prev => editLoop(prev, node));
    }

    return item;
  });

function menuReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MENU:
      return state.set('menu', fromJS(action.menu));
    case ADD_NODE:
      return state.update('menu', prev =>
        loop(prev, action.parentId, action.node),
      );
    case EDIT_NODE:
      return state.update('menu', prev => editLoop(prev, action.node));
    default:
      return state;
  }
}

export default menuReducer;
