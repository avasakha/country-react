import React from 'react';
import {Main} from './component/pages/main.page';
import {Country} from './component/pages/country.page';
import{BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';

function App(){
  return(<Router>
    <Route path="/"  component={Main}/>
    <Route path="/country/:code" exact component={Country}/>
  </Router>)
}
export default App
