import React from "react";
import MealForm from "../MealsForm/MealsForm";
import classes from "./IndividualMeal.module.css";

const IndividualMeal = ({ name, description, price, id, addToCart }) => {
  const handleAddToCart = (id) => {
    addToCart(id);
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.mealDetails}>
        <div>{name}</div>
        <div>{description}</div>
        <div>{price}</div>
      </div>
      <div className={classes.amount_and_add}>
        <MealForm id={id} handleAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default IndividualMeal;
