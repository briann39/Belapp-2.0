import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// Boton Cuadrado (Notificaciones, volver atras, etc)
export const ButtonSquared = ({ content }) => {
  return (
    <button className="w-12 h-12 p-2 text-xl text-gray-700 transition duration-300 bg-gray-200 border-2 border-gray-400 rounded-lg active:scale-95 hover:bg-blue-300">
      {content}
    </button>
  );
};

export const ButtonSquaredBigPrimary = ({ content, icono }) => {
  return (
    <button className="w-1/3 p-5 text-2xl text-white bg-black rounded-lg">
      {icono}
      <p className="text-sm font-bold">{content}</p>
    </button>
  );
};

export const ButtonSquaredBigSecondary = ({ content, icono }) => {
  return (
    <button className="w-1/3 p-5 text-2xl text-black bg-white border-2 border-gray-400 rounded-lg">
      {icono}
      <p className="text-sm font-bold">{content}</p>
    </button>
  );
};

// Boton primario redondeado y negro
export const ButtonPrimary = ({ content, typeButton, action }) => {
  return (
    <button
      type={typeButton}
      className="w-full max-w-100 py-2.5 bg-black text-white hover:bg-gray-800 transition duration-300  rounded-full font-bold active:scale-95"
      onClick={action}
    >
      {content}
    </button>
  );
};
