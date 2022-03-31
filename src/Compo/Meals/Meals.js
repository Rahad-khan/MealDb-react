import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";

const Meals = () => {
  const [seachText, setSeachText] = useState('');
  const [meals, setMeals] = useState([]);
  const foodKeyword = e => {
    setSeachText(e.target.value)
  }
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${seachText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [seachText]);
  return (
    <div>
        <h1 className="text-center text-3xl font-semibold text-green-500 my-5">Search Your Desired Food Here</h1>
        <input className="border-2 border-red-600 focus:outline-blue-500 px-2 text-lg w-1/3 mx-auto block" onChange={foodKeyword} type="text" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
          {
              meals?.map(meal => <Meal 
                key={meal.idMeal}
                meal = {meal}>
                </Meal>)
          }
      </div>
    </div>
  );
};

export default Meals;
