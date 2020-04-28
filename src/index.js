import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'main/App';
import * as serviceWorker from './serviceWorker';

const env = process.env.NODE_ENV
if (env === 'development') {
  const config = require('config')[env] || {}
  if (config.useLocalmock) {
    const { mockXHR } = require('./mock')
    mockXHR()
  }
  // console.log(3333, config)
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
