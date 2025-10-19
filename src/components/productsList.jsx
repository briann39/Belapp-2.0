import React, { useContext, useState } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

export const ProductsList = () => {
  const {
    products,
    setProducts,
    addProduct,
    removeProduct,
    editProduct,
    getProduct,
    searchProducts,
    filterProducts,
    productSelected,
    setProductSelected,
  } = useContext(ProductsContext);

  /* Lista de Productos  */
  return (
    <ul className="box-border flex flex-col flex-1 w-full h-full gap-2 overflow-auto">
      {/* Labels de datos */}

      <li className="box-border flex justify-around w-full p-5 font-bold align-middle bg-black border border-gray-300 rounded-lg">
        <span className="w-20 font-sans text-white truncate md:w-20">
          Codigo
        </span>
        <span className="w-16 font-sans text-white truncate md:w-32">
          Nombre
        </span>
        <span className="w-16 font-sans text-white truncate md:w-32">
          Color
        </span>
        <span className="w-16 font-sans text-white truncate md:w-32">
          Precio
        </span>
      </li>

      {/* Products */}

      {products.map((product) => {
        return (
          <li
            className={`box-border flex justify-around w-full p-2.5 align-middle border border-gray-300 rounded-lg transition duration-300 cursor-pointer ${
              product.id % 2 !== 0 ? "bg-gray-200" : "bg-white"
            } `}
            style={{
              backgroundColor: product.id === productSelected ? "#DBEAFE" : "",
            }}
            onClick={() => setProductSelected(product.id)}
            key={product.id}
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
