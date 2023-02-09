import React from "react";
import ModalContent from "../../Components/Modal/ModalContent";
import classes from "./Modal.module.css";

const Modal = ({ mealId, setModalVisible }) => {
  return (
    <div className={classes.modalBackdrop}>
      <div className={classes.modal}>
        <ModalContent
          mealId={mealId}
          setModalVisible={setModalVisible}
        ></ModalContent>
      </div>
    </div>
  );
};

export default Modal;
