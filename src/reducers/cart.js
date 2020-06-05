import { PUSH_ITEM, INC, DEC, REM_ITEM } from '../actions/actionTypes';

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
    case REM_ITEM:
      return [...state.filter((item) => item.title !== action.title)];
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
