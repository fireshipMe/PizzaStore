import { PUSH_ITEM, INC, DEC } from '../actions/actionTypes';

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
    case INC:
      return [
        ...state.map((item) => {
          if (item.title === action.title) {
            return {
              title: action.title,
              quantity: action.quantity + 1,
            };
          }
          return item;
        }),
      ];
    case DEC:
      return [
        ...state.map((item) => {
          if (item.title === action.title) {
            return {
              title: action.title,
              quantity: action.quantity - 1,
            };
          }
          return item;
        }),
      ];
    default:
      return state;
  }
};

export default cart;
