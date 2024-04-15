import React from "react";
import { useState, useEffect } from "react";
import FoodsCards from "../FoodsCards";
import ModelFood from "../ModelFood";
import Shimmer from "../Shimmer/Shimmer";

const Cards = () => {
  const API_ID = process.env.REACT_APP_FOOD_APP_ID;
  const API_KEY = process.env.REACT_APP_FOOD_APP_KEY;
  const API_URL = process.env.REACT_APP_BASE_URL_API;
  //   console.log(API_ID);
  //   console.log(API_KEY);
  //   console.log(API_URL);

  const [filteredFoodCards, setFilteredFoodCards] = useState([]);
  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    const response = await fetch(
      `${API_URL}/api/food-database/v2/parser?app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    setFilteredFoodCards(data.hints);
  };
  if (!filteredFoodCards) return null;
  return filteredFoodCards?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="container">
        <div className="row">
          {filteredFoodCards.map((foods) => {
            // console.log(foods.measures);
            return (
              <FoodsCards
                label={foods.food.label}
                knownAs={foods.food.knownAs}
                category={foods.food.category}
                image={foods.food.image}
                categoryLabel={foods.food.categoryLabel}
                measures={foods.measures}
                id={foods.food.foodId}
                key={foods.food.foodId}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
