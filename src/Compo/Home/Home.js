import React, { useEffect, useState } from "react";
import Category from "../Category/Category";

const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold text-green-500 my-5">Type of Food Categories</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
          {
             categories.map(cata => <Category 
                cata = {cata}
                key={parseInt(categories.idCategory)}
                ></Category>)
          }
      </div>
    </div>
  );
};

export default Home;