import React from 'react';
import './App.css';
import {MarkersManagementList} from './MarkerComponents';
import {Map} from './MapComponents';

const config = require('./config.json')

class App extends React.Component {
  render(){
    return (<Map></Map>)
  }
}


export default App;
