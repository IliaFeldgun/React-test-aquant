import React from 'react';
import './App.css';
import { ReactBingmaps } from 'react-bingmaps';

import {MarkersManagementList} from './MarkerComponents';
import * as mapcontrol from './mapcontrol';

const config = require('./config.json')


export class Map extends React.Component {
  mapRef = React.createRef();
  map;
  newPushPin;
  componentDidMount() {
    mapcontrol.loadBingApi(config.dev.bing_maps_key).then(() => {
      this.initMap();
    });
  }
  componentDidUpdate() {
      this.initPushPins();
  }
  initPushPins()
  {
      for(let pin in this.props.markerList)
      {
          this.addPushPin(this.props.markerList[pin].longtitude,this.props.markerList[pin].latitude);
      }
  }
  addPushPin(longtitude,latitude)
  {
      if(this.map !== undefined)
      {
        var pushpin = new this.newPushPin({longtitude: longtitude, latitude: latitude}, null);
        this.map.entities.push(pushpin);
      }
  }
  render() {
      this.addPushPin()
    return <div ref={this.mapRef} className="map" />;
  }

  initMap() {
    this.map = new mapcontrol.Microsoft.Maps.Map(this.mapRef.current);
    this.newPushPin = mapcontrol.Microsoft.Maps.Pushpin
    //for (let pin in this.props.pushpin)
    if (this.props.mapOptions) {
      this.map.setOptions(this.props.mapOptions);
    }
    return this.map;
  }
}

export default Map;
