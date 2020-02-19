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
                        key={marker.longitude + "," + marker.latitude}  // needs to be changed to a better key
                        onDelete={this.props.handleListChange}/>
                )
                
            ) 
        }
      return (
        <div id="markerlist">
          A list of your markers:
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
            <div>{this.props.markerDetails.latitude}, {this.props.markerDetails.longitude}</div>
            <div id="deletebutton" onClick={this.props.onDelete} 
                 latitude={this.props.markerDetails.latitude} 
                 longitude={this.props.markerDetails.longitude}>
              Delete
            </div>
          </form>
        </div>
      )
    }
  }