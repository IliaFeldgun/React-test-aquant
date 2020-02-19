import React from 'react';
import * as mapcontrol from '../Apis/mapcontrol';

export class Map extends React.Component {
  constructor(props) {
    super(props);
    this.locationList = []
  }

  componentDidUpdate() {
    this.initPushPins()
    this.initLines()
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
  initLines()
  {
    if(this.props.map !== undefined && this.locationList.length > 1)
    {
      let line = new mapcontrol.Microsoft.Maps.Polyline(this.locationList)
      
      this.props.map.entities.push(line);
    }
  }
  addPushPin(latitude, longitude)
  {
    let location = new mapcontrol.Microsoft.Maps.Location(latitude, longitude)
    this.locationList.push(location);
    let pushpin = new mapcontrol.Microsoft.Maps.Pushpin(location, null)
    this.props.map.entities.push(pushpin)
  
  }
  render() {
    return <div ref={this.props.mapRef} className="map" />;
  }
}

export default Map;