import React from 'react';
import './App.css';
import * as mapcontrol from './mapcontrol';

const config = require('./config.json')


export class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markerList : []
    }
  }
  mapRef = React.createRef();
  map;
  mapPushPin;
  mapLocation;

  componentDidMount() {
    mapcontrol.loadBingApi(config.dev.bing_maps_key).then(() => {
      this.initMap()
    });
  }

  componentDidUpdate() {
    this.initPushPins()
  }
  initPushPins()
  {
    if(this.map !== undefined)
    {
      this.map.entities.clear();

      for(let pin in this.props.markerList)
      {
          this.addPushPin(this.props.markerList[pin].longtitude,this.props.markerList[pin].latitude);
      }
    }
  }
  addPushPin(longtitude,latitude)
  {
    //if(this.map.EntityCollection)
    let location = new this.mapLocation(longtitude,latitude)
    let pushpin = new this.mapPushPin(location, null)
    this.map.entities.push(pushpin)
  
  }
  render() {
    return <div ref={this.mapRef} className="map" />;
  }

  initMap() {
    this.map = new mapcontrol.Microsoft.Maps.Map(this.mapRef.current);
    this.mapPushPin = mapcontrol.Microsoft.Maps.Pushpin
    this.mapLocation = mapcontrol.Microsoft.Maps.Location
    //for (let pin in this.props.pushpin)
    if (this.props.mapOptions) {
      this.map.setOptions(this.props.mapOptions);
    }
    return this.map;
  }
}

export default Map;
