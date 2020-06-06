import { PUSH_ITEM, INC, DEC, REM_ITEM } from './actionTypes';

export const pushItem = (title, quantity, price) => ({
  type: PUSH_ITEM,
  title: title,
  quantity: quantity,
  price: price,
});

export const remItem = (title) => ({
  type: REM_ITEM,
  title: title,
});

export const incQuantity = (title, quantity) => ({
  type: INC,
  title: title,
  quantity: quantity,
});

export const decQuantity = (title, quantity) => ({
  type: DEC,
  title: title,
  quantity: quantity,
});
