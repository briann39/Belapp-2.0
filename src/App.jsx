import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ClientProvider } from "./contexts/ClientsContext";
import { ProductsList } from "./components/productsList.jsx";

function App() {
  return (
    <ClientProvider>
      <div className="w-screen h-screen p-5 bg-gray-100">
        <ProductsList />
      </div>
    </ClientProvider>
  );
}

export default App;
