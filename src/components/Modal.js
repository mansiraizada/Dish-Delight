// Modal.js
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
      onClick={props.onClick}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-md">
      {props.children}
    </div>
  );
};

const portalElement = document.getElementById("modal-root");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
