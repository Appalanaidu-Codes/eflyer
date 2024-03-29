import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux';
import { Provider } from 'react-redux';


let initialStore = {

  iteam:[]

}

let reducer = (latestStore = initialStore,dispatchedObj)=>{

  console.log(dispatchedObj);
  if(dispatchedObj.type == "addIteam"){
    return {...latestStore,iteam:latestStore.iteam.concat([dispatchedObj.payload])}
  }
return latestStore;

}

let store = createStore(reducer);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
