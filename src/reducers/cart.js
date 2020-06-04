import { PUSH_ITEM } from '../actions/actionTypes';

const cart = (state = [], action) => {
  switch (action.type) {
    case PUSH_ITEM:
      return [
        ...state,
        {
          title: action.title,
          quantity: action.quantity,
        },
      ];
    default:
      return state;
  }
};

export default cart;
