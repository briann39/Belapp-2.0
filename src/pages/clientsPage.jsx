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
import { InfoClient } from "../components/infoClient";
import { NewClientForm } from "../components/newClientForm";

export const ClientsPage = () => {
  const { addClient, clientSelected, getClient, removeClient } =
    useContext(ClientsContext);

  const [showAddClient, setShowAddClient] = useState(false);
  const [showInfoClient, setShowInfoClient] = useState(false);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center pb-16 gap-2.5 h-full w-full overflow-auto">
        {/* Menu de inforamcion del cliente */}
        <InfoClient
          clientId={clientSelected}
          closeMenu={() => setShowInfoClient(false)}
          menu={showInfoClient}
        />
        <NewClientForm
          menuOn={showAddClient}
          action={() => setShowAddClient(false)}
        />
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
        {/* Lista de clientes */}
        <ClientsList />
        {/* Botones de accion para los clientes */}
        <div className="flex w-full gap-5">
          {/* Boton para ver detalles */}
          <ButtonSquaredBigPrimary
            icono={<FontAwesomeIcon icon={faUser} />}
            content={"Detalles"}
            action={() => setShowInfoClient(true)}
          />
          {/* Boton para editar el cliente */}
          <ButtonSquaredBigSecondary
            icono={<FontAwesomeIcon icon={faUserEdit} />}
            content={"Editar"}
          />
          {/* Boton para eliminar el cliente */}
          <ButtonSquaredBigSecondary
            icono={<FontAwesomeIcon icon={faTrash} />}
            content={"Eliminar"}
            action={() => removeClient(clientSelected)}
          />
        </div>
      </div>
    </>
  );
};
