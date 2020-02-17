import React from 'react';

export class MarkersManagementList extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        markerList = []
      }

      this.handleListChange = this.handleListChange.bind(this)
    }

    conmponentDidMount() {
        this.setState(
            {markerList: this.props.markerList}
        )
    }
    
    handleListChange(item)
    {
      let newList = this.state.markerList.slice().pop(item) // this needs to remove relevant marker
  
      this.setState({
        markerList = newList;
      })
    }
  
    render(){
      let list = this.state.markerList.map(
          marker => (
              <Marker markerDetails={item} key={item.longtitude} onDelete={this.handleListChange}/> // needs to be changed to a better key
          )
        
      )
      return (
        <div id="markerList">
            {list}
        </div>
      )
    }
  }
  
  class Marker extends React.Component{
    constructor(props) {
      super(props);
      
  
    }
    

    render(){
      return (
        <div className="marker">
          <h2 className="coordinates">
            {this.props.markerDetails.longtitude}, {this.props.markerDetails.latitude}
          </h2>
          <a onClick={this.props.onDelete}>Delete</a>
        </div>
      )
    }
  }