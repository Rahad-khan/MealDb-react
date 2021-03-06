import React from "react";
import { Link} from "react-router-dom";

const Meal = ({ meal }) => {
  const { strMeal, strMealThumb, strInstructions, strYoutube, idMeal } = meal;
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="bg-black overflow-hidden rounded-t-lg">
        <img
          className="rounded-t-lg hover:opacity-70 hover:scale-125 ease-in duration-300 "
          src={strMealThumb}
          alt=""
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {strMeal}
        </h5>
        <a href={strYoutube}>Recipie Link</a>
        <p className="mb-3 font-normal text-gray-700">
          {strInstructions.slice(0, 200)}
        </p>
        <Link to={`/meal/${idMeal}`}>
          <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600">
            Add This Item
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Meal;
