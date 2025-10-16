import React, { useContext, useState } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

export const ProductsList = () => {
  const { products, setProducts } = useContext(ProductsContext);

  /* Lista de Productos  */
  return (
    <ul className="box-border flex flex-col w-full h-full gap-2">
      {/* Labels de datos */}

      <li className="box-border flex justify-around w-full p-5 font-bold align-middle bg-white border border-gray-300 rounded-lg">
        <span className="w-20 font-sans text-gray-800 truncate md:w-20">
          Codigo
        </span>
        <span className="w-16 font-sans text-gray-800 truncate md:w-32">
          Nombre
        </span>
        <span className="w-16 font-sans text-gray-800 truncate md:w-32">
          Color
        </span>
        <span className="w-16 font-sans text-gray-800 truncate md:w-32">
          Precio
        </span>
      </li>

      {/* Products */}

      {products.map((product) => {
        return (
          <li
            key={product.id}
            className={`box-border flex justify-around w-full p-5 align-middle border border-gray-300 rounded-lg ${
              product.id % 2 !== 0 ? "bg-blue-100" : "bg-transparent"
            } `}
          >
            <span className="w-20 font-sans text-gray-800 truncate md:w-20">
              {product.code}
            </span>
            <span className="w-16 font-sans text-gray-800 truncate md:w-32">
              {product.name}
            </span>
            <span className="w-16 font-sans text-gray-800 truncate md:w-32">
              {product.color}
            </span>
            <span className="w-16 font-sans text-gray-800 truncate md:w-32">
              $ {product.price}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
