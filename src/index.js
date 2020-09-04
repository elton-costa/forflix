import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Video from './pages/Video/index.js';

import './styles/settings/colors.css';
import './styles/reset.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/video/new" component={Video} />  
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

