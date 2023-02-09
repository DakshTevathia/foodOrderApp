import React from "react";
import CartButton from "../Cart/CartButton/CartButton";
import classes from "./Navbar.module.css";

const Navbar = ({ setModalVisible }) => {
  return (
    <div className={classes.Navbar}>
      <div className={classes.content}>
        <h2>Food Ordering App</h2>
        <CartButton setModalVisible={setModalVisible} />
      </div>
    </div>
  );
};

export default Navbar;
