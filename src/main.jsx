import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProductsProvider } from "./contexts/ProductsContext.jsx";
import { PageProvider } from "./contexts/pageContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProductsProvider>
    <PageProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </PageProvider>
  </ProductsProvider>
);
