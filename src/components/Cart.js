// Cart.js
import React, { useContext, useState } from "react";
import Modal from "./Modal";
import Context from "./context";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";

const Cart = (props) => {
  const [isOrdering, setIsOrdering] = useState(false);
  const ctx = useContext(Context);

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  const startOrdering = () => {
    setIsOrdering(true);
  };

  const closeCart = () => {
    setIsOrdering(false);
    props.onHideCart(); // Call onHideCart to close the modal
  };

  const clearCart = () => {
    ctx.items.forEach((item) => {
    ctx.removeItem(item.id);
    });
    closeCart();
  };

  const cartItems = ctx.items.map((el) => (
    <CartItem
      key={el.id}
      name={el.name}
      amount={el.amount}
      price={el.price}
      onRemove={cartItemRemoveHandler.bind(null, el.id)}
      onAdd={cartItemAddHandler.bind(null, el)}
    ></CartItem>
  ));

  const hasItems = ctx.items.length > 0;

  return (
    <Modal onClick={props.onHideCart} style={{ zIndex: 20 }}>
      {cartItems}
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <span className="text-lg font-bold mb-2 block">Total Amount</span>
        <span className="text-xl font-bold">{totalAmount}</span>
      </div>
      {isOrdering && <CheckoutForm onClick={closeCart} clearCart={clearCart}/>}
      {!isOrdering && (
        <div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
            onClick={closeCart}
          >
            Close
          </button>
          {hasItems && (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md"
              onClick={startOrdering}
            >
              Order Now
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
