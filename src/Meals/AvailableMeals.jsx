import { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card.jsx";
import MealItem from "./MealItem/MealItem.jsx";

const AvailableMeals = () => {
  const [mealData, setMealData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    const fetchMeal = async () => {
      const response = await fetch(
        "https://react-meal-4a60a-default-rtdb.firebaseio.com/meal.json"
      );
      if (!response.ok) {
        throw new Error("Somethings went wrong");
      }

      const responseData = await response.json();
      let responseArray = [];
      for (const key in responseData) {
        responseArray.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMealData(responseArray);
      setIsLoading(false);
    };

    fetchMeal().catch((error) => {
      setIsError(error.message);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }
  
  if (isError) {
    return (
      <section className={classes.mealsError}>
        <p>{isError}</p>
      </section>
    )
  }

  const mealList = mealData.map((item) => (
    <MealItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
