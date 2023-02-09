import React from "react";
import IndividualMeal from "../IndividualMeals/IndividualMeal.js";
import { DUMMY_MEALS } from "../MealsData.js";
import classes from "./MealsList.module.css";

const MealsList = ({ addToCart }) => {
  return (
    <div className={classes.div}>
      {DUMMY_MEALS.map((ele, idx, array) => (
        <IndividualMeal
          addToCart={addToCart}
          key={ele.id}
          id={ele.id}
          name={ele.name}
          description={ele.description}
          price={ele.price}
        />
      ))}
    </div>
  );
};

export default MealsList;
