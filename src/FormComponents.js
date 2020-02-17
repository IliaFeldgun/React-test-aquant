import React from 'react';

export class MarkersForm extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>
                <label>longtitude:
                    <input name="longtitude" type="text" />
                </label>
                <label>latitude:
                    <input name="latitude" type="text" />
                </label>
                <input value="submit" type="Submit" /> 
            </form>
        )
    }
}