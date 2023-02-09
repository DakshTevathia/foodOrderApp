import React from "react";

const ModalContent = ({ mealId, setModalVisible }) => {
  return (
    <div>
      {mealId}
      <button onClick={setModalVisible}>Close</button>
      <button onClick={console.log("orderPlaced")}>Order</button>
    </div>
  );
};

export default ModalContent;
