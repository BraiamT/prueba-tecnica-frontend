import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ReactTestApp } from './ReactTestApp';
import { Provider } from 'react-redux';

import './styles.css';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <HashRouter>
        <ReactTestApp />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
