import React, { useRef, useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Context from "./context";

const inputValid = (val) => val.trim() !== "";
const postalCodeValid = (val) => val.trim().length === 6;

const CheckoutForm = (props) => {
  const [formValid, setFormValid] = useState({
    username: true,
    address: true,
    postalCode: true,
    city: true,
  });

  const enteredNameRef = useRef();
  const enteredAddressRef = useRef();
  const enteredPostalCodeRef = useRef();
  const enteredCityRef = useRef();

  const cartContext = useContext(Context);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = enteredNameRef.current.value;
    const enteredAddress = enteredAddressRef.current.value;
    const enteredPostalCode = enteredPostalCodeRef.current.value;
    const enteredCity = enteredCityRef.current.value;

    const enteredNameIsValid = inputValid(enteredName);
    const enteredAddressIsValid = inputValid(enteredAddress);
    const enteredCityIsValid = inputValid(enteredCity);
    const enteredPostalCodeIsValid = postalCodeValid(enteredPostalCode);

    setFormValid({
      username: enteredNameIsValid,
      address: enteredAddressIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    setTimeout(() => {
    toast.success("Your order has been placed!", {
      position: "top-center",
      autoClose: 3000,
    });
  }, 100);

    cartContext.clearCart();
    props.onClick();
  };

  return (
    <>
    <ToastContainer position="top-center" autoClose={3000} />
   <form className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
          Name
        </label>
        <input
          id="name"
          type="text"
          ref={enteredNameRef}
          className={`mt-1 p-2 w-full rounded-md border ${
            !formValid.username ? "border-red-500" : "border-gray-300"
          }`}
        />
        {!formValid.username && <p className="text-red-500">Enter correct value.</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-600">
          Address
        </label>
        <input
          id="address"
          type="text"
          ref={enteredAddressRef}
          className={`mt-1 p-2 w-full rounded-md border ${
            !formValid.address ? "border-red-500" : "border-gray-300"
          }`}
        />
        {!formValid.address && <p className="text-red-500">Enter correct value.</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="postal" className="block text-sm font-medium text-gray-600">
          Postal Code
        </label>
        <input
          id="postal"
          type="text"
          ref={enteredPostalCodeRef}
          className={`mt-1 p-2 w-full rounded-md border ${
            !formValid.postalCode ? "border-red-500" : "border-gray-300"
          }`}
        />
        {!formValid.postalCode && <p className="text-red-500">Enter correct value.</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block text-sm font-medium text-gray-600">
          City
        </label>
        <input
          id="city"
          type="text"
          ref={enteredCityRef}
          className={`mt-1 p-2 w-full rounded-md border ${
            !formValid.city ? "border-red-500" : "border-gray-300"
          }`}
        />
        {!formValid.city && <p className="text-red-500">Enter correct value.</p>}
      </div>
      <div className="flex justify-between">
          <button
            type="button"
            onClick={props.onClick}
            className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:border-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={submitHandler}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Confirm
          </button>
        </div>
      </form>
      </>
  );
};

export default CheckoutForm;
