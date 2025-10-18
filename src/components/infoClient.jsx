import {
  faMapPin,
  faPencil,
  faPhone,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { ClientsContext } from "../contexts/ClientsContext";
import { ButtonPrimary, ButtonSquared } from "./buttons";

export const InfoClient = ({ clientId, closeMenu, menu }) => {
  const { getClient, removeClient } = useContext(ClientsContext);
  const client = getClient(clientId);

  if (!client) return <div></div>;
  return (
    <>
      <div
        className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
        style={{ display: menu ? "flex" : "none" }}
        onClick={closeMenu}
      ></div>
      <div
        className="p-2.5 absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-4/5 flex flex-col gap-2.5 rounded-xl "
        style={{ display: menu ? "flex" : "none" }}
      >
        <h2 className="w-full m-0 text-xl font-bold text-center">
          Informacion
        </h2>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-left font-bold bg-gray-100 gap-2.5 w-full border p-1.5 rounded-lg ">
            <div className="flex items-center justify-center w-10 h-10 bg-white border-2 rounded-lg">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <h4>{client.name}</h4>
          </div>
          <div className="flex items-center justify-left font-bold bg-gray-100 gap-2.5 w-full border p-1.5 rounded-lg ">
            <div className="flex items-center justify-center w-10 h-10 bg-white border-2 rounded-lg">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <h4>{client.phone}</h4>
          </div>
          <div className="flex items-center justify-left font-bold bg-gray-100 gap-2.5 w-full border p-1.5 rounded-lg ">
            <div className="flex items-center justify-center w-10 h-10 bg-white border-2 rounded-lg">
              <FontAwesomeIcon icon={faMapPin} />
            </div>
            <h4>{client.direction}</h4>
          </div>
        </div>
        <div className="flex gap-2.5 items-center justify-end w-full ">
          <ButtonPrimary content={"Ver Productos"} />
          <ButtonSquared content={<FontAwesomeIcon icon={faPhone} />} />
          <ButtonSquared content={<FontAwesomeIcon icon={faPencil} />} />
          <ButtonSquared
            content={<FontAwesomeIcon icon={faTrash} />}
            action={() => removeClient(clientId)}
          />
        </div>
      </div>
    </>
  );
};
