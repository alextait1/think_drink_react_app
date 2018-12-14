import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { rootReducer } from './reducers/index';

const store = createStore(rootReducer, applyMiddleware(logger));

store.dispatch({
  type: 'HELLO_REDUX!',
  payload: 'HIIII',
});

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
