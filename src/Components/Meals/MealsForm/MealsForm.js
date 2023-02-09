import React, { useRef, useState } from "react";
import Input from "../../../UI/Input/Input";

const MealForm = ({ id, onAddToCart }) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const onAddClicked = () => {
    const enteredAmount = amountInputRef.current.value;
    //by ref's it's always a string
    const enteredAmountNumber = parseInt(enteredAmount);
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 10
    ) {
      setAmountIsValid(false);
      return;
    }
    onAddToCart(enteredAmountNumber);
  };

  return (
    <>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount+${id}`,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button
        onClick={() => {
          onAddClicked();
        }}
      >
        Add
      </button>
      {!amountIsValid && <p> Please Enter Valid Amount(1-10)</p>}
    </>
  );
};

export default MealForm;
