import React from 'react';
import ReactDOM from 'react-dom';

// import "bootstrap/dist/css/bootstrap.min.css";
import "./css/bootstrap.min.css"
import "./font-awesome/css/font-awesome.css";

import "./css/plugins/iCheck/custom.css"
import "./css/plugins/chartist/chartist.min.css"
import "./css/plugins/toastr/toastr.min.css"

import "./css/animate.css";
import "./css/style.css";
import './index.css';


import App from './App';
import * as serviceWorker from './serviceWorker';
// import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
      <App />
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
