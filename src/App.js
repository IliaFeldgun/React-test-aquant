import React from 'react';
import './App.css';

import {Map} from './Components/MapComponents';
import {MarkersForm} from './Components/FormComponents';
import {MarkersManagementList} from './Components/MarkerComponents';
import * as mapcontrol from './Apis/mapcontrol';

const config = require('./config.json')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markerList : [],
      map : {}
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleListChange = this.handleListChange.bind(this)
  }
  mapRef = React.createRef();

  handleListChange(e)
  {
    let newList = this.state.markerList.filter(item => 
      item.latitude !== e.target.getAttribute("latitude") &&
      item.longitude !== e.target.getAttribute("longitude") )
    this.setState({
      markerList: newList
    })
  }
  
  handleSubmit(e)
  {
      e.preventDefault();
      let newMarkerList = this.state.markerList.slice();
      let newLatitude = e.target.latitude.value
      let newLongitude = e.target.longitude.value

      if (newLatitude && newLongitude)
      {
        newMarkerList.push(
            {
              latitude: newLatitude,
              longitude: newLongitude
            }
        );
        this.setState(
            {
                markerList: newMarkerList
            }
        )

        e.target.reset()
      }
      else
      {
        alert("Invalid input, perhaps you left an empty field?")
      }
  }
  componentDidMount() {
    mapcontrol.loadBingApi(config.dev.bing_maps_key).then(() => {
      this.initMap()
    });
  }  
  initMap() {
    let newMap = new mapcontrol.Microsoft.Maps.Map(this.mapRef.current);
    //this.mapPushPin = mapcontrol.Microsoft.Maps.Pushpin
    //this.mapLocation = mapcontrol.Microsoft.Maps.Location
    //for (let pin in this.props.pushpin)
    if (this.props.mapOptions) {
      this.map.setOptions(this.props.mapOptions);
    }

    this.setState({
      map: newMap
    })
    return newMap;
  }
  render(){
    return (
    <div id="bingmarkers">
      <MarkersForm markerList={this.state.markerList} 
                    handleSubmit={this.handleSubmit} />
      <MarkersManagementList 
        markerList={this.state.markerList} 
        handleListChange={this.handleListChange} />
      <div id="mapcontainer">
        {
          <Map markerList={this.state.markerList} 
               mapRef={this.mapRef} 
               map={this.state.map} />
        }
      </div>
    </div>
    )
  }

}


export default App;
