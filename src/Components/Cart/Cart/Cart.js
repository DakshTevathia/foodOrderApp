import React, { useContext } from "react";
import classes from "./Cart.module.css";
import CartContext from "../../../Store/CartContext";
import CartItem from "../CartItems/CartItem";

const Cart = ({ setModalVisible }) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;

  const onRemove = (id) => {
    cartCtx.removeItem(id);
  };

  const onAdd = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          price={item.price}
          name={item.name}
          amount={item.amount}
          onRemove={onRemove.bind(null, item.id)}
          onAdd={onAdd.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <div className={classes.mainDiv}>
      <div className={classes.scrolllable}>{cartItems}</div>
      <span>Total:</span>
      <span>{` ₹${cartCtx.totalAmount}`}</span>
      <div>
        <button onClick={setModalVisible}>Close</button>
        {hasItems && (
          //appears only when we have items in the cart
          <button onClick={console.log("orderPlaced")}>Order</button>
        )}
      </div>
    </div>
  );
};

export default Cart;
