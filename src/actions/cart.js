import { PUSH_ITEM } from './actionTypes';

export const pushItem = (title, quantity) => ({
  type: PUSH_ITEM,
  title: title,
  quantity: quantity,
});
