import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import "modern-normalize";
import './index.css';
import { App } from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter basename='eco-consulting'>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);

