import React from "react";
import classes from "./AvailableMeals.module.css";
import { Card } from "../UI/Card";
import { MealItem } from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Dish 1",
    description: "d1",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Dish 2",
    description: "d2",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Dish 3",
    description: "d3",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Dish 4",
    description: "d4",
    price: 18.99,
  },
];

export const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <li key={meal.id}>   
      <MealItem  meal={meal} />
    </li>
  ));

  

  return (
    <section className={classes.meals}>
      <Card>
        <ui>{mealsList}</ui>
      </Card>
    </section>
  );
};
