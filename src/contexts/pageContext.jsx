import { createContext, useState } from "react";

// -------------------------
// Contexto y Provider para la pagina actual
// -------------------------

// Creo el contexto para compartir la pagina acual en la app
export const PageContext = createContext();

// Creo el proveedor que envuelve la app y permite acceder al estado de productos
export function PageProvider({ children }) {
  // Estado de pagina actual (Pagina)
  const [actuallyPage, setActuallyPage] = useState("Home");

  console.log(actuallyPage);
  // -------------------------
  // Retorno del Provider con estado y funciones
  // -------------------------

  return (
    <PageContext.Provider value={{ actuallyPage, setActuallyPage }}>
      {children}
    </PageContext.Provider>
  );
}
