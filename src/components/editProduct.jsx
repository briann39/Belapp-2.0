import React, { useContext, useEffect, useState } from "react";
import { ButtonPrimary } from "./buttons";
import { ProductsContext } from "../contexts/ProductsContext";

export const EditProduct = ({ menuOn, action }) => {
  const [newCodeProduct, setNewCodeProduct] = useState("");
  const [newNameProduct, setNewNameProduct] = useState("");
  const [newColorProduct, setNewColorProduct] = useState("");
  const [newCategoryProduct, setNewCategoryProduct] = useState("");
  const [newPriceProduct, setNewPriceProduct] = useState("");

  const { productSelected, setProductSelected, getProduct, editProduct } =
    useContext(ProductsContext);

  const product = getProduct(productSelected);

  useEffect(() => {
    if (productSelected !== "") {
      setNewCodeProduct(product.code);
      setNewNameProduct(product.name);
      setNewColorProduct(product.color);
      setNewCategoryProduct(product.category);
      setNewPriceProduct(product.price);
    }
  }, [productSelected]);

  const editProd = () => {
    editProduct(productSelected, {
      name: newNameProduct,
      code: newCodeProduct,
      color: newColorProduct,
      category: newCategoryProduct,
      price: newPriceProduct,
    });
  };

  return (
    <>
      <div
        className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
        style={{ display: menuOn ? "flex" : "none" }}
        onClick={() => action()}
      ></div>
      {/* Menu de informacion del cliente */}

      <div
        className="p-5 absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-11/12 flex flex-col gap-2.5 rounded-xl max-w-96 "
        style={{ display: menuOn ? "flex" : "none" }}
      >
        {/* Encabezado del menu */}
        <h2 className="w-full m-0 text-xl font-bold text-center">
          Editar Producto
        </h2>
        <form
          className="flex flex-col gap-2.5"
          onSubmit={(e) => {
            e.preventDefault();
            editProd();
          }}
        >
          <div className="flex flex-col gap-1">
            <label
              className="w-full text-xs font-bold text-gray-500"
              htmlFor=""
            >
              Nombre del Producto:
            </label>
            <input
              type="text"
              className="py-1 px-2.5 border-2 rounded-md"
              value={newNameProduct}
              onChange={(e) => setNewNameProduct(e.target.value)}
            />
          </div>
          <div className="flex gap-2.5 w-full">
            <div className="flex flex-col w-1/2 gap-1">
              <label
                className="w-full text-xs font-bold text-gray-500 "
                htmlFor=""
              >
                Codigo del Producto:
              </label>
              <input
                type="text"
                className="w-full px-2.5 py-1 border-2 rounded-md"
                value={newCodeProduct}
                onChange={(e) => setNewCodeProduct(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-1/2 gap-1">
              <label
                className="w-full text-xs font-bold text-gray-500"
                htmlFor=""
              >
                Color:
              </label>
              <input
                type="text"
                className="w-full px-2.5 py-1 border-2 rounded-md"
                value={newColorProduct}
                onChange={(e) => setNewColorProduct(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="w-full text-xs font-bold text-gray-500"
              htmlFor=""
            >
              Categoria:
            </label>
            <input
              type="text"
              className="py-1 px-2.5 border-2 rounded-md"
              value={newCategoryProduct}
              onChange={(e) => setNewCategoryProduct(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="w-full text-xs font-bold text-gray-500"
              htmlFor=""
            >
              Precio:
            </label>
            <input
              type="text"
              className="py-1 px-2.5 border-2 rounded-md"
              value={newPriceProduct}
              onChange={(e) => setNewPriceProduct(e.target.value)}
            />
          </div>
          <ButtonPrimary typeButton="submit" content="Guardar producto" />
        </form>
      </div>
    </>
  );
};
