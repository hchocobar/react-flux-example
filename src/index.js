import React from 'react';
import {createRoot} from "react-dom/client";
// import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const root = createRoot(document.querySelector("#root"));
root.render(<App/>)

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
