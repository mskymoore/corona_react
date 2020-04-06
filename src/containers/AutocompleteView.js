import React from 'react';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';



export default class AutocompleteView extends React.Component {
    state = {
        locations: []
    }

    componentDidMount(){
        axios.get(`http://172.31.25.48:8888/api/locations`)
        .then(res => {
                  this.setState({locations: res.data});
                  console.log(res.data)
                 }
         );
    }

    handleChange = (event, value) => {
        console.log('changed to ', value.friendly_name);
    }

    render(){
        return (
            <div>
            <Autocomplete
              options={this.state.locations}
              getOptionLabel={(option) => option.friendly_name}
              groupBy={(option) => option.firstLetter}
              style={{ width: 300 }}
              value={this.state.location}
              renderInput={(params) => <TextField {...params} label="Locations" variant="outlined"/>}
              onChange={this.handleChange}
            ></Autocomplete>
            </div>
        )
    }
}