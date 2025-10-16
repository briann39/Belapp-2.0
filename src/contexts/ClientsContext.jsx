import { createContext, useState } from "react";

// -------------------------
// Contexto y Provider de Clientes
// -------------------------

// Creo el contexto para compartir datos de clientes en la app
export const ClientsContext = createContext();

// Creo el proveedor que envuelve la app y permite acceder al estado de clientes
export function ClientProvider({ children }) {
  // Estado de clientes inicial (id, nombre, numero, direccion, id de productos, monto)
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "Hola",
      phone: "099592441",
      direction: "Pilarica 334, (carlos gardel y pilar cabrera)",
      productsIds: [1, 2, 3],
      amount: 100,
    },
    {
      id: 2,
      name: "Hola",
      phone: "099592441",
      direction: "Pilarica 334, (carlos gardel y pilar cabrera)",
      productsIds: [1, 2, 3],
      amount: 100,
    },
    {
      id: 3,
      name: "Hola",
      phone: "099592441",
      direction: "Pilarica 334, (carlos gardel y pilar cabrera)",
      productsIds: [1, 2, 3],
      amount: 100,
    },
    {
      id: 4,
      name: "Hola",
      phone: "099592441",
      direction: "Pilarica 334, (carlos gardel y pilar cabrera)",
      productsIds: [1, 2, 3],
      amount: 100,
    },
  ]);

  // -------------------------
  // Funciones para manipular clientes
  // -------------------------

  // Agrega un nuevo cliente al estado
  const addClient = (newName, newPhone, newDirection) => {
    // Verifico si ya existe un cliente con el mismo id
    /* const idExist = clients.some((client) => client.id === newId); Omito esto para mas adelante */

    // Verifico que ningun dato sea vacio
    const allInputsFilled = [newName, newPhone, newDirection].every(
      (input) => input !== ""
    );

    if (allInputsFilled) {
      // Si todos los campos estan completos, creo un nuevo array con todos los clientes existentes + el nuevo
      const newClient = [
        ...clients, // mantengo los clientes existentes
        {
          id: clients.length + 1, // Le doy un nuevo id
          name: newName,
          phone: newPhone,
          direction: newDirection,
          productsIds: [], // nuevo cliente inicia sin productos
          amount: 0, // monto inicial en 0
        },
      ];

      setClients(newClient); // Actualiza el estado con el nuevo cliente
    } else {
      // Si algun campo esta muestro un log (CREAR ALERTA VISUAL MAS ADELANTE)

      console.log("Completa todos los campos");
    }
  };

  // Eliminar un cliente con su id
  const removeClient = (id) => {
    const newClient = clients.filter((client) => client.id !== id); // filtro los clientes que NO coinciden con el id

    setClients(newClient); // Acutalizo el estado
  };

  // Edita los datos de un cliente existente por su id
  const editClient = (id, updatedClient) => {
    setClients((prevClients) =>
      prevClients.map(
        (client) =>
          client.id === id ? { ...client, ...updatedClient } : client // si coincide el id, combino datos existentes con los nuevos
      )
    );
  };

  // Obtiene un cliente por su id
  const getClient = (id) => {
    const client = clients.find((client) => client.id === id); // busco el cliente
    return client; // retorna el cliente encontrado o undefined si no existe
  };

  // Buscar clientes por telefono o nombre
  const searchClients = (query) => {
    // Convertir busqueda en mayusculas
    const search = query.trim().toUpperCase();

    const matchs = clients.filter(
      // Filtrar clientes por busqueda
      (client) =>
        client.name.trim().toUpperCase().includes(search) ||
        client.phone.trim().toUpperCase().includes(search) // Convertir datos a Mayuscualas y verificar si tiene incluido la busqueda
    );
    if (matchs) {
      return matchs; // Retorno resultados si los hay
    } else {
      // Si no hay resultados muestro un log (CREAR ALERTA VISUAL MAS ADELANTE)
      console.log("Sin resultados");
    }
  };

  // -------------------------
  // Retorno del Provider con estado y funciones
  // -------------------------

  return (
    <ClientsContext.Provider
      value={{
        clients,
        setClients,
        addClient,
        removeClient,
        editClient,
        getClient,
        searchClients,
      }}
    >
      {children}
    </ClientsContext.Provider>
  );
}
