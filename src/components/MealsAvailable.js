// MealsAvailable.js
import React, { useState, useEffect } from "react";
import MealItem from "./MealItem";

const MealsAvailable = () => {
  const [error, setError] = useState();
  const [listOfMealss, setListOfMealss] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://orderwebsite-c9b43-default-rtdb.firebaseio.com/meals.json"
        );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();
        const fetchedMeals = [];

        for (const key in data) {
          fetchedMeals.push({
            id: key,
            name: data[key].Name,
            description: data[key].Description,
            price: data[key].Price,
          });
        }

        setListOfMealss(fetchedMeals);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchMeals();
  }, []);

  if (loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <p>Something went wrong!</p>
      </section>
    );
  }

  const listOfMeals = listOfMealss.map((el) => (
    <MealItem
      id={el.id}
      key={el.id}
      name={el.name}
      description={el.description}
      price={el.price}
    />
  ));

  return (
    <section className="bg-gradient-to-r from-green-100 to-blue-100 p-4">
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {listOfMeals}
      </div>
    </section>
  );
};

export default MealsAvailable;
