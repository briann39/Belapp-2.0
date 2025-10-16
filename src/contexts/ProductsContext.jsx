import { createContext, useState } from "react";

// -------------------------
// Contexto y Provider de Productos
// -------------------------

// Creo el contexto para compartir datos de productos en la app
export const ProductsContext = createContext();

// Creo el proveedor que envuelve la app y permite acceder al estado de productos
export function ProductsProvider({ children }) {
  // Estado de Productos inicial (codigo, nombre, color, categoria, precio, ganancia)
  const [products, setProducts] = useState([
    {
      id: 1,
      code: 1,
      name: "Hola",
      color: "099592441",
      categoria: "Perfume",
      price: 100,
      ganance: 25,
    },
    {
      id: 2,
      code: 3,
      name: "Perfume",
      color: "tt",
      categoria: "Perfume",
      price: 100,
      ganance: 25,
    },
  ]);

  // -------------------------
  // Funciones para manipular productos
  // -------------------------

  // Agrega un nuevo producto al estado
  const addProduct = (newCode, newColor, newName, newPrice, newCategory) => {
    // Verifico si ya existe un producto con el mismo codigo
    const codeExist = products.some((products) => products.id === newCode);

    // Verifico que ningun dato sea vacio
    const allInputsFilled = [
      newCode,
      newColor,
      newName,
      newPrice,
      newCategory,
    ].every((input) => input !== "");

    if (allInputsFilled && !codeExist) {
      // Si todos los campos estan completos, creo un nuevo array con todos los productos existentes + el nuevo
      const newProduct = [
        ...products, // Mantengo los productos existentes
        {
          id: products.length + 1, // Le doy un nuevo id
          code: newCode,
          name: newName,
          color: newColor,
          price: newPrice,
          category: newCategory,
          gain: 0, // La ganancia depende de la categoria (AGREGAR MAS ADELANTE)
        },
      ];

      setProducts(newProduct); // Actualiza el estado con el nuevo producto
    } else {
      // Si ya existe muestro un log (CREAR ALERTA VISUAL MAS ADELANTE)
      if (codeExist) {
        console.log("Id utilizado");
      } else {
        console.log("Completa todos los campos");
      }
    }
  };

  // Eliminar un producto con su codigo
  const removeProduct = (code) => {
    const newProduct = products.filter((product) => client.code !== code); // filtro los productos que NO coinciden con el codigo

    setProducts(newProduct); // Acutalizo el estado
  };

  // Edita los datos de un producto existente por su codigo
  const editProduct = (code, updatedProduct) => {
    const newData = products.map(
      (product) =>
        product.code === code ? { ...product, ...updatedProduct } : product // si coincide el id, combino datos existentes con los nuevos
    );

    setProducts(newData); // Actualizo el estado con los datos nuevos
  };

  // Obtiene un producto por su codigo
  const getProduct = (code) => {
    const product = products.find((product) => product.code === code); // busco el producto
    return product; // retorna el cliente encontrado o undefined si no existe (Manejar datos para ALERTA VISUAL)
  };

  // Buscar productos por codigo o nombre
  const searchProducts = (query) => {
    // Convertir busqueda en mayusculas
    const search = query.trim().toUpperCase();

    const matchs = products.filter(
      // Filtrar clientes por busqueda
      (product) =>
        product.name.trim().toUpperCase().includes(search) ||
        product.code.trim().toUpperCase().includes(search) // Convertir datos a Mayuscualas y verificar si tiene incluido la busqueda
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
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        addProduct,
        removeProduct,
        editProduct,
        getProduct,
        searchProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
