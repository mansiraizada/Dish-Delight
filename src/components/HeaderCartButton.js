// HeaderCartButton.js
import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import Context from "./context";

const HeaderCartButton = (props) => {
  const ctx = useContext(Context);

  const totalItems = ctx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  return (
    <button onClick={props.onClick} className="pt-10">
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="bg-yellow-500 text-black px-2 py-1 rounded ml-2">
        {totalItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
