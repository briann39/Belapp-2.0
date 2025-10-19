import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ClientProvider } from "./contexts/ClientsContext";
import { ProductsList } from "./components/productsList.jsx";
import { Home } from "./pages/home.jsx";
import { NavigateBar } from "./components/navigateBar.jsx";
import { PageContext } from "./contexts/pageContext.jsx";
import { ClientsList } from "./components/clientsList.jsx";
import { ClientsPage } from "./pages/clientsPage.jsx";
import { ProductsPage } from "./pages/productsPage.jsx";

function App() {
  const { actuallyPage, setActuallyPage } = useContext(PageContext);

  const buttonAddClient = () => {};

  return (
    <ClientProvider>
      <div className="relative w-screen h-screen bg-gray-100">
        {/* Conenedor para la pagina */}
        <div
          className="w-screen p-5 pb-16 bg-gray-100 h-fit"
          style={{ display: `${!(actuallyPage === "Home") ? "none" : ""}` }}
        >
          <Home />
        </div>
        <div
          className="w-screen h-screen p-5 bg-gray-100"
          style={{ display: `${!(actuallyPage === "Clients") ? "none" : ""}` }}
        >
          <ClientsPage />
        </div>
        <div
          className="w-screen h-screen p-5 bg-gray-100"
          style={{ display: `${!(actuallyPage === "Products") ? "none" : ""}` }}
        >
          <ProductsPage />
        </div>
        {/* Barra de navegacion para android */}
        <NavigateBar />
      </div>
    </ClientProvider>
  );
}

export default App;
