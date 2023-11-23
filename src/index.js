import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import persistor, { store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { toast, ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <MainLayout>
          <App />
        </MainLayout>
      </BrowserRouter>
      <ToastContainer theme={"colored"} position={toast.POSITION.TOP_RIGHT} />
    </PersistGate>
  </Provider>
);
