import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { GoogleOAuthProvider } from '@react-oauth/google';
const persistor = persistStore(store);
const CLIENT_ID = import.meta.env.VITE_API_GOOGLE_OAUTH_CLIENT_ID as string;
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
   <Provider  store={store} >
    <PersistGate persistor={persistor} >
   <Router>
      <AppRoutes />
    </Router>
    </PersistGate>
    </Provider> 
    </GoogleOAuthProvider>;
  </React.StrictMode>,
)
