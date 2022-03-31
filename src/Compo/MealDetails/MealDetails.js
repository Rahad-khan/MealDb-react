import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealDetails = () => {
  const { mealId } = useParams();

  const [meal, setMeal] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, [mealId]);
  const { strMeal ,strInstructions, strMealThumb,strTags,strArea} = meal;
  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden items-center space-x-5">
      <div className="bg-cover">
          <img src={strMealThumb} alt="" />
      </div>
      <div className="w-2/3 p-2">
        <h1 className="text-gray-900 font-bold text-2xl">{strMeal}</h1>
        <p className="mt-2 text-gray-600 text-lg">
          {strInstructions}
        </p>
        <p className="mt-2 text-gray-600 text-lg font-semibold">Region :{strArea}</p>
        <p className=" mb-4"><small>Tags: {strTags}</small></p>
          <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
            Add to Card
          </button>
      </div>
    </div>
  );
};

export default MealDetails;
