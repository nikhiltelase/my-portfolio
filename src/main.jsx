import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

if (process.env.NODE_ENV === 'production') {
  // Enable service worker in production for offline use
  import('./serviceWorker').then((module) => module.register());
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
