import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker';

import ScrollToTop from './components/scroll-top/scroll-top.component';
import './index.css';
import App from './App';

import { store, persistor } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <ScrollToTop>
          <App/>
        </ScrollToTop>
      </PersistGate>
    </BrowserRouter>
  </Provider>
,
  document.getElementById('root')
);

serviceWorker.register();