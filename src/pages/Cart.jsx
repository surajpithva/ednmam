import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const API_ID = process.env.REACT_APP_FOOD_APP_ID;
  const API_KEY = process.env.REACT_APP_FOOD_APP_KEY;
  const API_URL = process.env.REACT_APP_BASE_URL_API;

  const [filteredFoodCards, setFilteredFoodCards] = useState([]);
  const [filteredCartItems, setfilteredCartItems] = useState();

  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/food-database/v2/parser?app_id=${API_ID}&app_key=${API_KEY}`
      );
      const data = await response?.json();
      setFilteredFoodCards(data.hints);
      filteredcart(data.hints);
    } catch (error) {
      console.log(error);
    }
  };
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log(filteredFoodCards, "foodcartas");
  const filteredcart = (data) => {
    const abc = data.filter((foodItem) =>
      cartItems.some((cartItemId) => foodItem.food.foodId === cartItemId)
    );
    console.log(abc);
    setfilteredCartItems(abc);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Label</th>
          <th scope="col">Image</th>
        </tr>
      </thead>
      {cartItems.length > 0 ? (
        <tbody>
          {filteredCartItems?.map((cartsProduct) => {
            console.log(cartsProduct.food.foodId);
            return (
              <CartItem
                data={cartsProduct.food.foodId}
                label={cartsProduct.food.label}
                image={cartsProduct.food.image}
                knownAs={cartsProduct.food.knownAs}
                key={cartsProduct.food.foodId}
              />
            );
          })}
        </tbody>
      ) : (
        <p>No items in the cart</p>
      )}
    </table>
  );
};

export default Cart;
