// Header.js
import React from "react";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <header className="w-full h-[40vh] bg-cover bg-center bg-gradient-to-r from-green-400 to-blue-500 p-4 ">
      <div className="flex flex-col justify-center items-center text-black">
        <h3 className="text-5xl font-bold mb-4 ">Dish Delight Meals</h3>
        <p className="text-lg">Discover the Taste of Joyful Eating</p>
        <HeaderCartButton onClick={props.onShowCart} />
      </div>
    </header>
  );
};

export default Header;
