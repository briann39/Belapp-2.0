import React, { useContext, useState } from "react";
import { ClientsContext } from "../contexts/ClientsContext";
import { ButtonPrimary } from "./buttons";

export const NewClientForm = ({ menuOn, setMenuOn, action }) => {
  const [newNameClient, setNewNameClient] = useState("");
  const [newNumberClient, setNewNumberClient] = useState("");
  const [newDirectionClient, setNewDirectionClient] = useState("");

  const { addClient } = useContext(ClientsContext);

  const newClient = () => {
    addClient(newNameClient, newNumberClient, newDirectionClient);
    action();
    setNewNameClient("");
    setNewNumberClient("");
    setNewDirectionClient("");
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
            newClient();
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
    </>
  );
};
