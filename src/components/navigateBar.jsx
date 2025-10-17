import {
  faBook,
  faBox,
  faGear,
  faHome,
  faHomeLg,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { PageContext } from "../contexts/pageContext";

// Barra de navegacion para android
export const NavigateBar = () => {
  // Estado de la pagina actual
  const { actuallyPage, setActuallyPage } = useContext(PageContext);

  return (
    <div className="flex items-center justify-around fixed bottom-0 left-0 w-full bg-white border shadow-[0_-4px_6px_rgba(0,0,0,0.1)]  rounded-t-3xl ">
      {/* Pagina inicio Icono de casa*/}
      <div
        className="flex flex-col items-center justify-center w-16 h-16 text-xl text-gray-400 transition duration-300 cursor-pointer hover:text-black"
        style={{ color: `${actuallyPage === "Home" ? "black" : ""}` }}
        onClick={() => setActuallyPage("Home")}
      >
        <FontAwesomeIcon icon={faHome} />
        <span className="text-xs font-bold">Inicio</span>
      </div>

      {/* Pagina de clientes Icono de personas*/}
      <div
        className="flex flex-col items-center justify-center w-16 h-16 text-xl text-gray-400 transition duration-300 cursor-pointer hover:text-black"
        style={{ color: `${actuallyPage === "Clients" ? "black" : ""}` }}
        onClick={() => setActuallyPage("Clients")}
      >
        <FontAwesomeIcon icon={faUsers} />
        <span className="text-xs font-bold">Clientes</span>
      </div>

      {/* Pagina de Productos Icono de libro*/}
      <div
        className="flex flex-col items-center justify-center w-16 h-16 text-xl text-gray-400 transition duration-300 cursor-pointer hover:text-black"
        style={{ color: `${actuallyPage === "Products" ? "black" : ""}` }}
        onClick={() => setActuallyPage("Products")}
      >
        <FontAwesomeIcon icon={faBook} />
        <span className="text-xs font-bold">Productos</span>
      </div>

      {/* Pagina de configuraciones Icono de engranje */}
      <div
        className="flex flex-col items-center justify-center w-16 h-16 text-xl text-gray-400 transition duration-300 cursor-pointer hover:text-black"
        style={{ color: `${actuallyPage === "Config" ? "black" : ""}` }}
        onClick={() => setActuallyPage("Config")}
      >
        <FontAwesomeIcon icon={faGear} />
        <span className="text-xs font-bold">Configuracion</span>
      </div>
    </div>
  );
};
