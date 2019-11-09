import React from 'react';
import world from '../../world.svg';
import {Input} from '../input'

function Main(){
  return(<div className="App">
    <div className="App-header"><img src={world} className="App-logo"></img></div>    
      <Input/>
  </div>)
}
export {Main}