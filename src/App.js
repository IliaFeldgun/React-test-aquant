import React from 'react';
import './App.css';

import {Map} from './MapComponents';
import {MarkersForm} from './FormComponents';
import {MarkersManagementList} from './MarkerComponents';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markerList : []
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleListChange = this.handleListChange.bind(this)
  }

  handleListChange(e)
  {
    let newList = this.state.markerList.filter(item => 
      item.longtitude !== e.target.getAttribute("longtitude") && 
      item.latitude !== e.target.getAttribute("latitude"))
    this.setState({
      markerList: newList
    })
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
  }
  
  render(){
    return (
    <div>
      <div>
        <MarkersForm markerList={this.state.markerList} handleSubmit={this.handleSubmit}/>
      </div>
      <div>
        <MarkersManagementList 
          markerList={this.state.markerList} 
          handleListChange={this.handleListChange}/>
      </div>
      <div>
        {
          //<Map markerList={this.state.markerList}/>
        }
      </div>
    </div>
    )
  }

}


export default App;
