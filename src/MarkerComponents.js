import React from 'react';

export class MarkersManagementList extends React.Component{  
    render(){
        let list;

        if (this.props.markerList !== undefined)
        {
            list = this.props.markerList.map(
                marker => (
                    <Marker 
                        markerDetails={marker} 
                        key={marker.longtitude}  // needs to be changed to a better key
                        onDelete={this.props.handleListChange}/>
                )
                
            ) 
        }
      return (
        <div id="markerList">
            {list}
        </div>
      )
    }
  }
  
  class Marker extends React.Component{
      render(){
      return (
        <div className="marker">
          <form className="coordinates">
            <div>{this.props.markerDetails.longtitude}, {this.props.markerDetails.latitude}</div>
            <div onClick={this.props.onDelete} longtitude={this.props.markerDetails.longtitude} latitude={this.props.markerDetails.latitude}>Delete</div>
          </form>
        </div>
      )
    }
  }