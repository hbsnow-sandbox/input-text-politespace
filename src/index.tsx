import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InputText1 from './components/InputText1';
import InputText2 from './components/InputText2';
import InputText3 from './components/InputText3';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <InputText1 />
    <InputText2 />
    <InputText3 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
