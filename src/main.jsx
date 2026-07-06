// import { StrictMode } from 'react'
import {BrowserRouter}  from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductContextProvider from './context/ProductContex.jsx';

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 
 <ProductContextProvider>
 
    <App />
    </ProductContextProvider>
  </ BrowserRouter>,
  
)
