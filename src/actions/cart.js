import { PUSH_ITEM, INC, DEC } from './actionTypes';

export const pushItem = (title, quantity) => ({
  type: PUSH_ITEM,
  title: title,
  quantity: quantity,
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
