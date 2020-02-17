import React from 'react';
import './App.css';
import { ReactBingmaps } from 'react-bingmaps';

const config = require('./config.json')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.AddPushPinOnClick = this.AddPushPinOnClick.bind(this);

  }
  
  AddPushPinOnClick(location)
  {
    console.log(location);
  }
  render(){
    return (
      <ReactBingmaps 
        bingmapKey = {config.dev.bing_maps_key} 
        getLocation = {
          {addHandler: "click", callback:this.AddPushPinOnClick}
        }> 
      </ReactBingmaps>
    );
  }
}

export default App;
