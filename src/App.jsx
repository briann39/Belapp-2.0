import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ClientsList } from "./components/clientsList";
import { ClientProvider } from "./contexts/ClientsContext";

function App() {
  return (
    <ClientProvider>
      <div className="w-screen h-screen p-5 bg-gray-100">
        <ClientsList />
      </div>
    </ClientProvider>
  );
}

export default App;
