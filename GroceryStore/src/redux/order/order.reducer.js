import { OrderActionTypes } from "./order.actionTypes";

const INITIAL_STATE = {
  orderItems: [],
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.ORDER_ADD_ITEM:
      return {
        ...state,
        orderItems: [...state.orderItems, action.payload],
      };

    default:
      return state;
  }
};

export default orderReducer;
