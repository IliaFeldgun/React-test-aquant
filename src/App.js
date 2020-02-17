import React from 'react';
import './App.css';

import {Map} from './MapComponents';
import {MarkersForm} from './FormComponents';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markerList : []
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(e)
  {
      e.preventDefault();
      let newMarkerList = this.state.markerList.slice();
      newMarkerList.push(
          {
              longtitude: e.target.longtitude.value,
              latitude: e.target.latitude.value


          }
      );
      this.setState(
          {
              markerList: newMarkerList
          }
      )

      console.log(this.state)
  }
  
  render(){
    return (
    <div>
      <div>
        <MarkersForm markerList={this.state.markerList} handleSubmit={this.handleSubmit}/>
      </div>
      <div>
        <Map markerList={[]/*this.state.markerList*/}/>
      </div>
    </div>
    )
  }

}


export default App;
