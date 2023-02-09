import React from "react";
import Cart from "../../Components/Cart/Cart/Cart";
import classes from "./Modal.module.css";

const Modal = ({ mealId, setModalVisible }) => {
  return (
    <div className={classes.modalBackdrop} >
      <div className={classes.modal}>
        <Cart mealId={mealId} setModalVisible={setModalVisible}></Cart>
      </div>
    </div>
  );
};

export default Modal;
