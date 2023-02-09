import React, { useContext } from "react";
import MealForm from "../MealsForm/MealsForm";
import classes from "./IndividualMeal.module.css";
import CartContext from "../../../Store/CartContext";

const IndividualMeal = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext);
  const onAddToCart = (totalAmount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: totalAmount,
      price: price,
    });
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.mealDetails}>
        <div>{name}</div>
        <div>{description}</div>
        <div>{price}</div>
      </div>
      <div className={classes.amount_and_add}>
        <MealForm id={id} onAddToCart={onAddToCart} />
      </div>
    </div>
  );
};

export default IndividualMeal;
