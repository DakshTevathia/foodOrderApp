import React, { useContext } from "react";
import classes from "./CartButton.module.css";
import { BsCart4 } from "react-icons/bs";
import CartContext from "../../../Store/CartContext";

const CartButton = ({ setModalVisible }) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);
  return (
    <button className={classes.cartDiv} onClick={setModalVisible}>
      <div className={classes.cartDistribution}>
        <span>
          <BsCart4 />
        </span>
        <span>Your Cart</span>
        <span>{numberOfCartItems}</span>
      </div>
    </button>
  );
};

export default CartButton;
