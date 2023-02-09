import React from "react";
import classes from "./Cart.module.css";

const Cart = ({ mealId, setModalVisible }) => {
  const dataObj = [{ id: "c1", name: "Sushi", amount: "2", price: "12.99" }];
  const cartItems = (
    <ul>
      {dataObj.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div className={classes.mainDiv}>
      {cartItems}
      <span>Total:</span>
      <span>25.52</span>
      <div>
        <button onClick={setModalVisible}>Close</button>
        <button onClick={console.log("orderPlaced")}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
