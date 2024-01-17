import React, { useRef, useState } from "react";
import Input from "./Input";

const MealItemForm = (props) => {
  const amountRef = useRef();
  const [formValid, setFormValid] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountRef.current.value; //this value is always a string
    const enteredAmountNum = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setFormValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNum);
  };
  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label= 'Quantity'
        input={{
          id: "amount_" + props.id,
          type: "number",
        //   min: "1",
        //   max: "5",
          step: "1",
          defaultValue: "1",
          className: "w-fit ml-2 mb-2 outline outline-blue-100 rounded",
        }}
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Add Item</button>
      {!formValid && <p className="italic">Enter quantity between 1-5</p>}
    </form>
  );
};

export default MealItemForm;
