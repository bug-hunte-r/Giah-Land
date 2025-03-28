import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./Context/UserProvider.jsx";
import { MainProductsProvider } from "./Context/MainProductContext";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <BrowserRouter>
      <MainProductsProvider>
        <App />
      </MainProductsProvider>
    </BrowserRouter>
  </UserProvider>
);
