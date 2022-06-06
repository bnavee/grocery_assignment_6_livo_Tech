import { createSelector } from 'reselect';

const selectOrder = (state) => state.order;

export const selectOrderItems = createSelector(
  [selectOrder],
  (order) => order.orderItems
);

export const selectOrderItemsCount = createSelector(
  [selectOrderItems, selectOrderItems],
  (orderItems, listItems) =>
    orderItems.reduce(
      (accumulatedQuantity, orderItem) =>
        accumulatedQuantity + orderItem.quantity,
      0
    )
);

export const selectOrderTotal = createSelector([selectOrderItems], (orderItems) =>
  orderItems.reduce(
    (accumulatedQuantity, orderItem) =>
      accumulatedQuantity + orderItem.quantity * orderItem.price,
    0
  )
);
