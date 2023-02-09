import React from "react";
import Cart from "../Cart/Cart";
import classes from "./Navbar.module.css";

const Navbar = ({ mealId, setModalVisible }) => {
  return (
    <div className={classes.Navbar}>
      <div className={classes.content}>
        <h2>Food Ordering App</h2>
        <Cart mealId={mealId} setModalVisible={setModalVisible} />
      </div>
    </div>
  );
};

export default Navbar;
