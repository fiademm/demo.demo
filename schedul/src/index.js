import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "@fontsource/darker-grotesque/300.css"; // Specify weight
import "@fontsource/darker-grotesque/400.css"; // Specify weight
import "@fontsource/darker-grotesque/500.css"; // Specify weight
import "@fontsource/darker-grotesque/600.css"; // Specify weight
import "@fontsource/darker-grotesque/700.css"; // Specify weight
import "@fontsource/darker-grotesque/800.css"; // Specify weight
import "@fontsource/darker-grotesque/900.css"; // Specify weight
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
