// MealItem.js
import React, { useContext, useState } from "react";
import MealItemForm from "./MealItemForm";
import Context from "./context";

const MealItem = (props) => {
  const ctx = useContext(Context);
  const price = `$${props.price.toFixed(2)}`;

  const [isHovered, setIsHovered] = useState(false);

  const addtoCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div
      className={`bg-white p-4 rounded-md shadow-md m-4 transition ${
        isHovered ? "ring-2 ring-blue-500" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-lg font-bold">{props.name}</h3>
      <div className="mb-2 text-gray-600">{props.description}</div>
      <div className="text-xl font-bold mb-2">{price}</div>
      <MealItemForm onAddToCart={addtoCartHandler} />
    </div>
  );
};

export default MealItem;
