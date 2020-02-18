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
      let newLongtitude = e.target.longtitude.value
      let newLatitude = e.target.latitude.value
      if (newLatitude !== undefined && newLongtitude !== undefined)
      {
        newMarkerList.push(
            {
                longtitude: newLongtitude,
                latitude: newLatitude
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
          <Map markerList={this.state.markerList}/>
        }
      </div>
    </div>
    )
  }

}


export default App;
