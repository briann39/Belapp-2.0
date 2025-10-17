import React, { useContext, useState } from "react";
import { ClientsList } from "../components/clientsList";
import {
  ButtonPrimary,
  ButtonSquaredBigPrimary,
  ButtonSquaredBigSecondary,
} from "../components/buttons";
import { ClientsContext } from "../contexts/ClientsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUser, faUserEdit } from "@fortawesome/free-solid-svg-icons";

export const ClientsPage = () => {
  const [newNameClient, setNewNameClient] = useState("");
  const [newNumberClient, setNewNumberClient] = useState("");
  const [newDirectionClient, setNewDirectionClient] = useState("");

  const { addClient } = useContext(ClientsContext);

  const [showAddClient, setShowAddClient] = useState(false);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center pb-16 gap-2.5 h-full w-full overflow-auto">
        <div
          class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          style={{ display: showAddClient ? "flex" : "none" }}
          onClick={() => {
            setShowAddClient(false);
          }}
        ></div>
        <div
          className="absolute z-10 flex flex-col w-4/5 gap-2.5 p-5 -translate-x-1/2 -translate-y-1/2 bg-white border-2 left-1/2 top-1/2 rounded-xl"
          style={{ display: showAddClient ? "flex" : "none" }}
        >
          <form
            className="flex flex-col gap-2.5"
            onSubmit={(e) => {
              e.preventDefault();
              addClient(newNameClient, newNumberClient, newDirectionClient);
              setShowAddClient(false);
            }}
          >
            <h2 className="w-full font-sans text-2xl font-bold text-center">
              Agregar nuevo cliente
            </h2>
            <div className="flex flex-col gap-1">
              <label className="w-full font-bold text-gray-500" htmlFor="">
                Nombre:
              </label>
              <input
                type="text"
                className="py-1 px-2.5 border-2 rounded-full"
                value={newNameClient}
                onChange={(e) => setNewNameClient(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="w-full font-bold text-gray-500" htmlFor="">
                Numero de telefono:
              </label>
              <input
                type="text"
                className="py-1 px-2.5 border-2 rounded-full"
                value={newNumberClient}
                onChange={(e) => setNewNumberClient(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="w-full font-bold text-gray-500" htmlFor="">
                Direccion:
              </label>
              <input
                type="text"
                className="py-1 px-2.5 border-2 rounded-full"
                value={newDirectionClient}
                onChange={(e) => setNewDirectionClient(e.target.value)}
              />
            </div>
            <ButtonPrimary typeButton="submit" content="Nuevo Cliente" />
          </form>
        </div>
        {/* Encabezador de pagina de clientes */}
        <div className="flex items-center justify-between w-full gap-5">
          {/* Titulo de la pagina */}
          <h2 className="text-2xl font-bold">Clientes</h2>
          {/* Boton de agragar nuevo cliente */}
          <div className="w-1/2">
            <ButtonPrimary
              action={() => setShowAddClient(true)}
              content="Nuevo cliente"
            />
          </div>
        </div>
        <ClientsList />
        <div className="flex w-full gap-5">
          <ButtonSquaredBigPrimary
            icono={<FontAwesomeIcon icon={faUser} />}
            content={"Detalles"}
          />
          <ButtonSquaredBigSecondary
            icono={<FontAwesomeIcon icon={faUserEdit} />}
            content={"Editar cliente"}
          />
          <ButtonSquaredBigSecondary
            icono={<FontAwesomeIcon icon={faTrash} />}
            content={"Eliminar cliente"}
          />
        </div>
      </div>
    </>
  );
};
