import React from "react";
import {
  ButtonPrimary,
  ButtonSquared,
  ButtonSquaredBigPrimary,
  ButtonSquaredBigSecondary,
} from "../components/buttons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBox,
  faCashRegister,
  faChartBar,
  faPlus,
  faShoppingBag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

// Pagina de inicio
export const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* Encabezado */}
      <div className="flex justify-between align">
        {/* Bienvenida a la aplicacion, con nombre */}
        <div>
          <h2 className="font-sans font-bold text-black">Hola, Belen</h2>
          <p className="text-gray-600">Bienvenida a BelApp</p>
        </div>
        {/* boton para ver notificaciones*/}
        <ButtonSquared content={<FontAwesomeIcon icon={faBell} />} />
      </div>
      {/*Contenedor para ver le monto total de ventas */}
      <div className="flex flex-col w-full gap-2.5 p-5 bg-white border-2 rounded-2xl">
        <span className="font-bold text-gray-600">Total:</span>
        <h3 className="text-6xl font-bold text-black">$ 5,000</h3>
        <ButtonPrimary content="Agregar Cliente" />
      </div>
      <div className="flex w-full gap-5">
        {/* Contenedor para ver las ganacias aproximadas */}
        <div className="flex flex-col w-1/2 p-5 bg-white border-2 rounded-2xl">
          <span className="text-xs font-bold text-gray-600">Ganancias:</span>
          <h3 className="text-xl font-bold text-black">$ 5,000</h3>
        </div>
        {/* Contenedor para ver los clientes faltantes por pagar */}

        <div className="flex flex-col w-1/2 p-5 bg-white border-2 rounded-2xl">
          <span className="text-xs font-bold text-gray-600">
            Clientes restantes:
          </span>
          <h3 className="text-xl font-bold text-black">20</h3>
        </div>
      </div>
      {/* Botones de acciones */}
      <div className="flex gap-5">
        <ButtonSquaredBigPrimary
          icono={<FontAwesomeIcon icon={faPlus} />}
          content={"Agregar Pago"}
        />
        <ButtonSquaredBigSecondary
          icono={<FontAwesomeIcon icon={faShoppingBag} />}
          content={"Agregar Producto"}
        />
        <ButtonSquaredBigSecondary
          icono={<FontAwesomeIcon icon={faChartBar} />}
          content={"Resumen de campaña"}
        />
      </div>

      {/* Contenedor para ver los ultimos movimientos hechos */}

      <div className="flex flex-col w-full items-center justify-center gap-2.5 p-5 bg-white border-2 rounded-2xl">
        <div className="flex justify-between w-full align-middle">
          <h2 className="text-xl font-bold">Movimientos</h2>
          <p className="font-bold text-gray-800 text-s">Mostrar todos</p>
        </div>
        <ul className="w-full">
          <li className="flex items-center py-2.5 justify-start w-full gap-2.5 border-b-2 ">
            <div className="flex justify-center p-2.5 text-xl align-middle bg-gray-200 rounded-lg">
              <FontAwesomeIcon icon={faCashRegister} />
            </div>
            <div>
              <h4 className="text-sm font-bold">
                Pago de nataly recibido de $900
              </h4>
              <p className="text-xs text-gray-400">dom 15 de Octubre</p>
            </div>
          </li>
          <li className="flex items-center py-2.5 justify-start w-full gap-2.5 border-b-2 ">
            <div className="flex justify-center p-2.5 text-xl align-middle bg-gray-200 rounded-lg ">
              <FontAwesomeIcon icon={faBox} />
            </div>
            <div>
              <h4 className="text-sm font-bold">Pedido de Nataly Entregado</h4>
              <p className="text-xs text-gray-400">dom 15 de Octubre</p>
            </div>
          </li>
          <li className="flex items-center py-2.5 justify-start w-full gap-2.5 border-b-2 ">
            <div className="flex justify-center text-xl p-2.5 align-middle bg-gray-200 rounded-lg">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>
              <h4 className="text-sm font-bold">Nuevo cliente rocio</h4>
              <p className="text-xs text-gray-400">dom 15 de Octubre</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
