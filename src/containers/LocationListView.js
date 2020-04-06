import React from 'react';
import axios from 'axios';
import LocationList from '../components/LocationList';
import AutoCompleteView from './AutocompleteView';


class LocationListView extends React.Component {

    state = {
        locations: []
    }

    componentDidMount(){
        axios.get('http://172.31.25.48:8888/api/locations')
        .then(res => {
            this.setState({
                locations: res.data
            });
            console.log('location response', res.data)
            console.log('new locations state', this.state.locations)

        }
            )
    }
    render() {
        return (
            <div>
            <AutoCompleteView />
            <h1>locationlist</h1>
            <LocationList data={this.state.locations}/>
            </div>
        )
    }
}

export default LocationListView;