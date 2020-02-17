import React from 'react';
import './App.css';
import { ReactBingmaps } from 'react-bingmaps';

import {MarkersManagementList} from './MarkerComponents';

const config = require('./config.json')

export class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /*pushPins : [
        {
          "location":[13.0827, 80.2707], "option":{ color: 'red' }, "addHandler": {"type" : "click", callback: this.callBackMethod }
        }
      ]*/
    }
    this.AddPushPinOnClick = this.AddPushPinOnClick.bind(this);

  }
  /*changeState(){
    this.setState({
        pushPins : [
            {
              "location":[13.0827, 80.2707], "option":{ color: 'red' }, "addHandler": {"type" : "click", callback: this.callBackMethod }
            }
          ]
    })
    }*/
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
      <div id="bingMapsApp">
      <div>
        <MarkersManagementList markerList={this.state.locationList}></MarkersManagementList>
      </div>
      <ReactBingmaps 
        bingmapKey = {config.dev.bing_maps_key}
      >
         
      </ReactBingmaps>
      </div>
    );
  }
}

export default Map;
