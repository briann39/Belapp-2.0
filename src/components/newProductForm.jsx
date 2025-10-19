import React, { useContext, useState } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { ButtonPrimary } from "./buttons";

export const NewProductForm = ({ menuOn, action }) => {
  const { addProduct } = useContext(ProductsContext);

  const [newCodeProduct, setNewCodeProduct] = useState("");
  const [newNameProduct, setNewNameProduct] = useState("");
  const [newColorProduct, setNewColorProduct] = useState("");
  const [newCategoryProduct, setNewCategoryProduct] = useState("");
  const [newPriceProduct, setNewPriceProduct] = useState("");

  const newProduct = () => {
    addProduct(
      newCodeProduct,
      newColorProduct,
      newNameProduct,
      newPriceProduct,
      newCategoryProduct
    );
  };

  return (
    <>
      <div
        className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
        style={{ display: menuOn ? "flex" : "none" }}
        onClick={action}
      ></div>
      <div
        className="absolute z-10 flex flex-col w-4/5 gap-2.5 p-5 -translate-x-1/2 -translate-y-1/2 bg-white border-2 left-1/2 top-1/2 rounded-xl"
        style={{ display: menuOn ? "flex" : "none" }}
      >
        <form
          className="flex flex-col gap-2.5"
          onSubmit={(e) => {
            e.preventDefault();
            newProduct();
          }}
        >
          <h2 className="w-full font-sans text-2xl font-bold text-center">
            Nuevo Producto
          </h2>
          <div className="flex flex-col gap-1">
            <label className="w-full font-bold text-gray-500" htmlFor="">
              Nombre del Producto:
            </label>
            <input
              type="text"
              className="py-1 px-2.5 border-2 rounded-full"
              value={newNameProduct}
              onChange={(e) => setNewNameProduct(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="w-full font-bold text-gray-500" htmlFor="">
              Codigo del Producto:
            </label>
            <input
              type="text"
              className="py-1 px-2.5 border-2 rounded-full"
              value={newCodeProduct}
              onChange={(e) => setNewCodeProduct(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="w-full font-bold text-gray-500" htmlFor="">
              Color:
            </label>
            <input
              type="text"
              className="py-1 px-2.5 border-2 rounded-full"
              value={newColorProduct}
              onChange={(e) => setNewColorProduct(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="w-full font-bold text-gray-500" htmlFor="">
              Categoria:
            </label>
            <input
              type="text"
              className="py-1 px-2.5 border-2 rounded-full"
              value={newCategoryProduct}
              onChange={(e) => setNewCategoryProduct(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="w-full font-bold text-gray-500" htmlFor="">
              Precio:
            </label>
            <input
              type="text"
              className="py-1 px-2.5 border-2 rounded-full"
              value={newPriceProduct}
              onChange={(e) => setNewPriceProduct(e.target.value)}
            />
          </div>
          <ButtonPrimary typeButton="submit" content="Nuevo Producto" />
        </form>
      </div>
    </>
  );
};
