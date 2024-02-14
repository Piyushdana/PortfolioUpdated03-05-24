import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import App from './App';
 

AOS.init(); // Initialize AOS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 