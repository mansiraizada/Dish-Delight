import React, { useReducer } from "react";
import Context from "./context";

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    //Returns the index of item if it is already existing in the cart
    //findindex will run for every item in the array
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    if (action.type === "CLEAR") {
    return {
      items: [],
      totalAmount: 0,
    };
  }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  return { items: [], totalAmount: 0 };
};

const CartProvider = (props) => {
  const [cartItem, dispatchCartItem] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addCartItemHandler = (item) => {
    dispatchCartItem({ type: "ADD", item: item });
  };

  const removeCartItemHandler = (id) => {
    dispatchCartItem({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartItem({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartItem.items,
    totalAmount: cartItem.totalAmount,
    addItem: addCartItemHandler,
    removeItem: removeCartItemHandler,
    clearCart: clearCartHandler,
  };

  return (
    <Context.Provider value={cartContext}>{props.children}</Context.Provider>
  );
};

export default CartProvider;
