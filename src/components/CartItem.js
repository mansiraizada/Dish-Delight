import React from "react";

const CartItem = (props) => {
  const price = `$${props.price}`;

  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h2 className="text-lg font-bold">{props.name}</h2>
        <div className="text-gray-600">
          <span className="font-bold">{price}</span>
          <span className="ml-2">x {props.amount}</span>
        </div>
      </div>
      <div>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={props.onRemove}
        >
          -
        </button>
        <button
          className="bg-green-500 text-white px-2 py-1 rounded ml-2"
          onClick={props.onAdd}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
