import React from 'react';
import * as mapcontrol from '../Apis/mapcontrol';

const config = require('../config.json')


export class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markerList : []
    }
  }

  componentDidUpdate() {
    this.initPushPins()
  }

  initPushPins()
  {
    if(this.props.map !== undefined)
    {
      this.props.map.entities.clear();

      for(let pin in this.props.markerList)
      {
          this.addPushPin(this.props.markerList[pin].latitude, this.props.markerList[pin].longitude);
      }
    }
  }

  addPushPin(latitude, longitude)
  {
    let location = new mapcontrol.Microsoft.Maps.Location(latitude, longitude)
    let pushpin = new mapcontrol.Microsoft.Maps.Pushpin(location, null)
    this.props.map.entities.push(pushpin)
  
  }
  render() {
    return <div ref={this.props.mapRef} className="map" />;
  }
}

export default Map;