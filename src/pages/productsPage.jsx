import React, { useState } from "react";
import {
  ButtonPrimary,
  ButtonSquaredBigPrimary,
  ButtonSquaredBigSecondary,
} from "../components/buttons";
import { NewProductForm } from "../components/newProductForm";
import { ProductsList } from "../components/productsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faPencil,
  faPlus,
  faRotateRight,
  faSearch,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { EditProduct } from "../components/editProduct";

export const ProductsPage = () => {
  const [showNewProduct, setShowNewProduct] = useState(false);

  const [showEditProduct, setShowEditProduct] = useState(true);

  return (
    <div className="relative flex flex-col items-center justify-center pb-16 gap-2.5 h-full w-full overflow-auto">
      {/* Menus  */}

      {/* Menu de informacion del cliente */}
      <NewProductForm
        action={() => setShowNewProduct(false)}
        menuOn={showNewProduct}
      />

      <EditProduct
        action={() => setShowEditProduct(false)}
        menuOn={showEditProduct}
      />
      {/* Encabezador de pagina de clientes */}
      <div className="flex items-center justify-between w-full gap-5">
        {/* Titulo de la pagina */}
        <h2 className="text-2xl font-bold">Productos</h2>
      </div>
      <div className="w-full flex flex-col gap-2.5">
        <div className="flex gap-2.5 w-full">
          <ButtonSquaredBigPrimary
            content={"Nuevo Producto"}
            action={() => setShowNewProduct(true)}
            icono={<FontAwesomeIcon icon={faPlus} />}
          />
          <ButtonSquaredBigSecondary
            content={"Editar Producto"}
            icono={<FontAwesomeIcon icon={faPencil} />}
            action={() => setShowEditProduct(true)}
          />
          <ButtonSquaredBigSecondary
            content={"Eliminar Producto"}
            icono={<FontAwesomeIcon icon={faTrash} />}
          />
        </div>
        <div className="flex gap-2.5 w-full">
          <ButtonSquaredBigSecondary
            content={"Producto a cliente"}
            icono={<FontAwesomeIcon icon={faUser} />}
          />
          <ButtonSquaredBigSecondary
            content={"Buscar Producto"}
            icono={<FontAwesomeIcon icon={faSearch} />}
          />
          <ButtonSquaredBigSecondary
            content={"Reiniciar catalogo"}
            icono={<FontAwesomeIcon icon={faRotateRight} />}
          />
        </div>
      </div>

      <ProductsList />
    </div>
  );
};
