import { menu } from './data';

export function findItemById(menu, id) {
  let finded = null;
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].id === id) {
      return menu[i];
    }

    if (menu[i].children && menu[i].children.length > 0) {
      finded = findItemById(menu[i].children, id);
      if (finded) {
        return finded;
      }
    }
  }

  return null;
}

export function getMenu() {
  return new Promise(resolve => {
    setTimeout(() => resolve(menu), 2000);
  });
}
