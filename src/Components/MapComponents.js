import React from 'react';
import * as mapcontrol from '../Apis/mapcontrol';

export class Map extends React.Component {
  constructor(props) {
    super(props);
    this.locationList = []
  }

  componentDidUpdate() {
    
    if(this.props.map !== undefined)
    {
      this.props.map.entities.clear();
      this.locationList = [];
      
      this.initPushPins()
      this.initLines()
    }
  }

  initPushPins()
  {
    this.props.markerList.forEach(pin => {
      this.addPushPin(pin.latitude, pin.longitude);
      });
  
  }
  initLines()
  {
    if(this.locationList.length > 1)
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