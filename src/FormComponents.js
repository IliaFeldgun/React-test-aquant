import React from 'react';

export class MarkersForm extends React.Component{
    constructor(props){
        super(props)
        {  
            this.handleSubmit = this.handleSubmit.bind(this)
        }
    }

    handleSubmit(e)
    {
        
    }
    render{
        return
        (
            <form onSubmit={this.handleSubmit}>
                <label>longtitude:
                    <input name="longtitude" type="text" />
                </label>
                <label>latitude:
                    <input name="latitude" type="text" />
                </label>
                <input value="submit" type="submit" /> 
            </form>
        )
    }
}