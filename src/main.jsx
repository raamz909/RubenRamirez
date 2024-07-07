import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from './common/ThemeContext'; // Updated import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider> {/* Updated to ThemeProvider */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
