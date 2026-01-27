import React from 'react';
import ReactDOM from 'react-dom/client'; // Note: /client
import App from './App';
import './index.css'; // optional

// Create the root container
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App inside <StrictMode>
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
