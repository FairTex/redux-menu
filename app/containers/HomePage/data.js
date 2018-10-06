const neapolPizza = {
  id: '0',
  title: 'Неаполь',
  ingredients: 'Сыр и помидоры',
  price: 250,
};

const margaritaPizza = {
  id: '1',
  title: 'Маргарита',
  ingredients: 'Сыр и помидоры',
  price: 300,
};

const kabayakiRoll = {
  id: '2',
  title: 'кабаяки',
  ingredients: 'Рыба и рис',
  price: 250,
};

const ninzaRoll = {
  id: '3',
  title: 'нинзя',
  ingredients: 'Рыба и рис',
  price: 250,
};

const pizza = {
  id: '4',
  title: 'Пицца',
};

const rolls = {
  id: '5',
  title: 'Роллы',
};

const rimPizza = {
  id: '6',
  title: 'Римская пицца',
};

const simplePizza = {
  id: '7',
  title: 'Обычная пицца',
};

const wrappedMenu = {
  id: '47',
  title: 'Меню',
}

const menu = [wrappedMenu]
menu[0].children = [pizza, rolls]
menu[0].children[0].children = [rimPizza, simplePizza];
menu[0].children[0].children[0].children = [neapolPizza];
menu[0].children[0].children[1].children = [margaritaPizza];
menu[0].children[1].children = [kabayakiRoll, ninzaRoll];

export { menu };
