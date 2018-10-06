import { ADD_NODE, EDIT_NODE, SET_MENU } from './constants';

export function addNode(node, parentId) {
  return {
    type: ADD_NODE,
    node,
    parentId,
  };
}

export function editNode(node) {
  return {
    type: EDIT_NODE,
    node,
  };
}

export function setMenu(menu) {
  return {
    type: SET_MENU,
    menu,
  };
}
