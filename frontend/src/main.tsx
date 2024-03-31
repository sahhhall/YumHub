import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "./components/ui/sonner";
import { FormProvider } from "./context/FormProvider"
const persistor = persistStore(store);
const CLIENT_ID = import.meta.env.VITE_API_GOOGLE_OAUTH_CLIENT_ID as string;

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <FormProvider>
              <AppRoutes />
              <Toaster visibleToasts={1} richColors position="top-right"/>
              </FormProvider>
            </PersistGate>
          </Provider>
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
