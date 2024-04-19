import React from "react";

const CartItem = ({ image, data, label, knownAs }) => {
  console.log(data);
  return (
    <tr>
      <th scope="col">
        <img src={image} alt="" className=" w-25" />
      </th>
      <th scope="col">{knownAs}</th>
      <th scope="col">{label}</th>
    </tr>
  );
};

export default CartItem;
