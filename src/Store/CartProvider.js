import React from "react";
import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    console.log(state, action.payload);
    const newTotal =
      state.totalAmount + action.payload.price * action.payload.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    console.log("new TOtal", newTotal);
    console.log("Index of Existing Cart Item", existingCartItemIndex);
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      //item already existed
      let updatedItem;
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.payload.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.payload);
    }
    return { items: updatedItems, totalAmount: newTotal };
  }
  if (action.type === "REMOVE_ITEM") {
    let existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload
    );
    let existingItem = state.items[existingCartItemIndex];
    let newTotal = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => {
        return item.id !== action.payload;
      });
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { items: updatedItems, totalAmount: newTotal };
  }
  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItem,
    removeItem: removeItem,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
