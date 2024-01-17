// App.js
import React, { useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import CartProvider from "./components/CartProvider";
import "./App.css";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCartHandler = () => {
    setIsCartVisible(true);
  };

  const hideCartHandler = () => {
    setIsCartVisible(false);
  };

  return (
    <div className="min-h-screen">
      <CartProvider>
        <Header onShowCart={showCartHandler} />
        <Meals />
        {isCartVisible && <Cart onHideCart={hideCartHandler} />}
      </CartProvider>
    </div>
  );
}

export default App;
