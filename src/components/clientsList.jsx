import React, { useContext, useEffect, useState } from "react";
import { ClientsContext } from "../contexts/ClientsContext";

export const ClientsList = () => {
  // Llamada al contexto de clientes
  const {
    clients,
    setClients,
    addClient,
    removeClient,
    editClient,
    getClient,
    searchClients,
  } = useContext(ClientsContext);

  getClient(1);
  /* Lista de Clientes  */
  return (
    <ul className="box-border flex flex-col w-full h-full gap-2">
      {/* Labels de datos */}

      <li className="box-border flex justify-around w-full p-5 font-bold align-middle bg-white border border-gray-300 rounded-lg">
        <span className="w-20 font-sans text-gray-800 truncate md:w-20">
          Id
        </span>
        <span className="w-16 font-sans text-gray-800 truncate md:w-32">
          Nombre
        </span>
        <span className="w-16 font-sans text-gray-800 truncate md:w-32">
          Telefono
        </span>
        <span className="w-16 font-sans text-gray-800 truncate md:w-32">
          Monto
        </span>
        <span className="w-16 font-sans text-gray-800 truncate md:w-32">
          Productos
        </span>
      </li>

      {/* Clientes */}

      {clients.map((client) => {
        return (
          <li
            key={client.id}
            className={`box-border flex justify-around w-full p-5 align-middle border border-gray-300 rounded-lg ${
              client.id % 2 !== 0 ? "bg-blue-100" : "bg-transparent"
            } `}
          >
            <span className="w-20 font-sans text-gray-800 truncate md:w-20">
              {client.id}
            </span>
            <span className="w-16 font-sans text-gray-800 truncate md:w-32">
              {client.name}
            </span>
            <span className="w-16 font-sans text-gray-800 truncate md:w-32">
              {client.phone}
            </span>
            <span className="w-16 font-sans text-gray-800 truncate md:w-32">
              {client.amount}
            </span>
            <span className="w-16 font-sans text-gray-800 truncate md:w-32">
              {client.productsIds.length}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
