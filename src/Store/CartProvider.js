import React from "react";
import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = state.items.concat(action.payload);
    const newTotal =
      state.totalAmount + action.payload.price * action.payload.amount;
    return { items: updatedItems, totalAmount: newTotal };
  }
  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemToCart = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };
  const removeItemfromCart = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemfromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
