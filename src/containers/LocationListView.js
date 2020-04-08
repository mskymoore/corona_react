import React from 'react';
import LocationList from '../components/LocationList';


class LocationListView extends React.Component {

    state = {
        locations: []
    }

    componentDidMount(){
    }
    render() {
        return (
            <div>
            <LocationList data={this.state.locations}/>
            </div>
        )
    }
}

export default LocationListView;