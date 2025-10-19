import {
  faCartShopping,
  faDollarSign,
  faMapPin,
  faMessage,
  faPencil,
  faPhone,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { ClientsContext } from "../contexts/ClientsContext";
import { ButtonPrimary, ButtonSquared } from "./buttons";

export const EditClient = ({ clientId, closeMenu, menu }) => {
  const { getClient, editClient } = useContext(ClientsContext);
  const client = getClient(clientId);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newDirection, setNewDirection] = useState("");

  useEffect(() => {
    if (clientId !== "") {
      setNewName(client.name);
      setNewPhone(client.phone);
      setNewDirection(client.direction);
    }
  }, [clientId, menu]);

  const newClient = () => {
    editClient(clientId, {
      name: newName,
      phone: newPhone,
      direction: newDirection,
    });
  };

  if (!client) return <div style={{ display: menu ? "flex" : "none" }}></div>;
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
        style={{ display: menu ? "flex" : "none" }}
        onClick={closeMenu}
      ></div>
      {/* Menu de informacion del cliente */}

      <div
        className="p-2.5 absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-11/12 flex flex-col gap-2.5 rounded-xl "
        style={{ display: menu ? "flex" : "none" }}
      >
        {/* Encabezado del menu */}
        <h2 className="w-full m-0 text-xl font-bold text-center">
          Editar cliente
        </h2>

        {/* informacion del cliente */}
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            newClient();
            closeMenu();
          }}
        >
          {/* Nombre */}
          <div className="flex items-center justify-left font-bold bg-gray-100 gap-2.5 w-full border p-1.5 rounded-lg ">
            <div className="flex items-center justify-center w-10 h-10 bg-white border-2 rounded-lg">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="bg-transparent px-2.5 py-1 rounded-lg border-2 border-black flex-1"
            />
          </div>
          {/* Numero de telefono */}
          <div className="flex items-center justify-left font-bold bg-gray-100 gap-2.5 w-full border p-1.5 rounded-lg ">
            <div className="flex items-center justify-center w-10 h-10 bg-white border-2 rounded-lg">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <input
              type="text"
              value={newPhone}
              onChange={(e) => setNewPhone(e.target.value)}
              className="bg-transparent px-2.5 py-1 rounded-lg border-2 border-black flex-1"
            />
          </div>
          {/* Direccion */}
          <div className="flex items-center justify-left font-bold bg-gray-100 gap-2.5 w-full border p-1.5 rounded-lg ">
            <div className="flex items-center justify-center w-10 h-10 bg-white border-2 rounded-lg">
              <FontAwesomeIcon icon={faMapPin} />
            </div>
            <input
              type="text"
              value={newDirection}
              onChange={(e) => setNewDirection(e.target.value)}
              className="bg-transparent px-2.5 py-1 rounded-lg border-2 border-black flex-1"
            />
          </div>

          {/* Contenedor de botones */}

          <div className="flex items-center w-full justify-left ">
            {/* Boton Principal, ver Productos */}
            <div className="w-1/2">
              <ButtonPrimary
                typeButton={"submit"}
                content={"Guardar cambios"}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
