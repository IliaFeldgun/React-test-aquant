import React from 'react';
import './App.css';
import { ReactBingmaps } from 'react-bingmaps';

import {MarkersManagementList} from './MarkerComponents';

const config = require('./config.json')



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationList : []
    }
    this.AddPushPinOnClick = this.AddPushPinOnClick.bind(this);

  }
  
  AddPushPinOnClick(location)
  {
    let newLocationList = this.state.locationList.slice();
    newLocationList.push(
      {
        latitude: location.latitude,
        longtitude: location.longtitude,
      }
    )
    this.setState({
      locationList: newLocationList
    })

    console.log(newLocationList);
  }
  
  render(){
    return (
      <div>
        <MarkersManagementList markerList={this.state.locationList}></MarkersManagementList>
      </div>
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
