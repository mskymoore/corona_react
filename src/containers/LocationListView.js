import React from 'react';
import axios from 'axios';
import LocationList from '../components/LocationList';
import Autocomplete from  '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

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
            <div>
            <Autocomplete
                id="combo-box-demo"
                options={this.state.locations}
                getOptionLabel={(option) => option.friendly_name}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
            ></Autocomplete>
            <LocationList data={this.state.locations}/>
            </div>
        )
    }
}

export default LocationListView;