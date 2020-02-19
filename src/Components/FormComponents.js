import React from 'react';
//import PlacesAutocomplete, {getLatLng} from 'react-places-autocomplete';
import * as mapcontrol from '../Apis/mapcontrol';

export class MarkersForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            searchByName : false
        }
        this.getRelevantForm = this.getRelevantForm.bind(this)
        this.handleCheckChange = this.handleCheckChange.bind(this)
    }

    handleCheckChange(e)
    {
        this.setState({
            searchByName : e.target.checked
        })
    }
    getRelevantForm()
    {   
        if (this.state.searchByName)
            return <LocationNameForm handleSubmit={this.props.handleSubmit} 
                                     map={this.props.map}/>
        else
            return <CoordinatesForm handleSubmit={this.props.handleSubmit} />
    }
    render() {
        return (
            <div id="locationform">
                <label>
                    <input name="toggleForm" type="checkbox" 
                           onChange={this.handleCheckChange} />
                    Search by location name
                </label>
                {this.getRelevantForm()}
            </div>
        )
    }
}

class CoordinatesForm extends React.Component {
    render() {
        return (
            <form id="coordinatesform" onSubmit={this.props.handleSubmit}>
                <label>Latitude: 
                    <input name="latitude" type="text" />
                </label>
                <label>Longitude: 
                    <input name="longitude" type="text" />
                </label>
                <input value="Add location" type="Submit" /> 
            </form>
        )
    }
}

class LocationNameForm extends React.Component {
    componentDidMount() {
        this.initSuggestManager()
    }
    initSuggestManager()
    {
        mapcontrol.Microsoft.Maps.loadModule('Microsoft.Maps.AutoSuggest', function () {
            var options = {
                maxResults: 4,
                //map: this.props.map
            };

            var manager = new mapcontrol.Microsoft.Maps.AutosuggestManager(options);
            
            manager.attachAutosuggest('#searchBox', '#searchBoxContainer', selectedSuggestion);
            
        });
        function selectedSuggestion(suggestionResult) {
            document.getElementById('nameFormLatitude').value = 
                suggestionResult.location.latitude;
            document.getElementById('nameFormLongitude').value = 
                suggestionResult.location.longitude;
            }
    }

    render() {
        return (
            <form id="nameform" onSubmit={this.props.handleSubmit}>
                <label>Location Name: </label>
                    <div id='searchBoxContainer'>
                        <input type='text' id='searchBox' autoComplete="öff"/>
                        <input type='text' id="nameFormLatitude" name="latitude" style={{display: "none"}}/>
                        <input type='text' id="nameFormLongitude" name="longitude" style={{display: "none"}}/>
                    </div>
                <input value="Add location" type="Submit"/>
            </form>
        )
    }
}