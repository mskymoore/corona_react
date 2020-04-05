import React from 'react';
import axios from 'axios';
import LocationList from '../components/LocationList';


class LocationListView extends React.Component {

    state = {
        locations: []
    }

    componentDidMount(){
        axios.get('http://333.isos.tech:8888/api/locations')
        .then(res => {
            this.setState({
                locations: res.data
            });
            console.log(res.data)

        }
            )
    }
    render() {
        return (
                <LocationList data={this.state.locations}/>
        )
    }
}

export default LocationListView;