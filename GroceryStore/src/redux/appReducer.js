import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cart.reducer";
import orderReducer from "./order/order.reducer";

const persistConfig = {
  key: "quoality-guest",
  storage,
  whitelist: ["cart"],
};

const appReducer = combineReducers({
  cart: cartReducer,
  order: orderReducer,
});

export default persistReducer(persistConfig, appReducer);
