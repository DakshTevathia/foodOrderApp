import React from "react";
import Input from "../../../UI/Input/Input";

const MealForm = ({ handleAddToCart, id }) => {
  return (
    <>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button
        onClick={() => {
          handleAddToCart(id);
        }}
      >
        Add
      </button>
    </>
  );
};

export default MealForm;
