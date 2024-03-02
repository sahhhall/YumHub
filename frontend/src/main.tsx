import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <Provider  store={store} >
    <PersistGate persistor={persistor} >
   <Router>
      <AppRoutes />
    </Router>
    </PersistGate>
    </Provider> 
  </React.StrictMode>,
)
