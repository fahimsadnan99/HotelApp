import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, RouterProvider} from "react-router-dom"
import Route from './Routes/routes';
import {store} from "../src/Redux/Store"
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from 'redux-persist';


const root = ReactDOM.createRoot(document.getElementById('root'));

const persistStorage = persistStore(store)

root.render(
  <React.StrictMode>
  <Provider store={store}>
  <PersistGate persistor={persistStorage}>
    <RouterProvider router={Route}></RouterProvider>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);


