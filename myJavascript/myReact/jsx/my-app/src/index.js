import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const whoWhere = function(countries){
  return name + " from " + countries.usa;
}

const countries = {
  usa : "Washington D.C",
  canada : "Ottawa",
};

const name = "jake"; 
const element = <h1>Hello {whoWhere(countries)}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);


// npm start : dev build, npm run build : production build(for minified JS file)
// see result in localhost:3000
// refer below commands to start/end react app
// "scripts": {
//   "start": "react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject"
// },

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
