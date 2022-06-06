import { v4 as uuidv4 } from "uuid";
import { OrderActionTypes } from "./order.actionTypes";

export const orderAddItem = (item, cartTotal) => ({
  type: OrderActionTypes.ORDER_ADD_ITEM,
  payload: { items: item, id: uuidv4(), orderTotal: cartTotal },
});

