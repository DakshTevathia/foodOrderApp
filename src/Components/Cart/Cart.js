import React from "react";
import classes from "./Cart.module.css";
import { BsCart4 } from "react-icons/bs";

const Cart = ({ mealId, setModalVisible }) => {
  console.log(mealId);
  return (
    <button className={classes.cartDiv} onClick={setModalVisible}>
      <div className={classes.cartDistribution}>
        <span>
          <BsCart4 />
        </span>
        <span>Your Cart</span>
        <span>0</span>
      </div>
    </button>
  );
};

export default Cart;
