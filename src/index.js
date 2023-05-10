import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import NumberContext from './context/numberContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <NumberContext.Provider value={5}>
      <App />
    </NumberContext.Provider>
);