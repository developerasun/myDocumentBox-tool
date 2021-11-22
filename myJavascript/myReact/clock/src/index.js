import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const myClock = function() {
  const localTime = new Date().toLocaleTimeString();
  const element = (
    <div>
      <h1>Jake's clock</h1>
      <p>Now it's : {localTime}</p>
    </div> 
  ); 

  ReactDOM.render(
    element, 
    document.getElementById('root')
  ); 

}

setInterval(myClock, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
