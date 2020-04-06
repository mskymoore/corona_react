import React from 'react';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';


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

    handleChange = (event, value) =>{
        const link = value.friendly_hash;
        return <Redirect to={'/location/' + {link}} />
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
              renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined"/>}
              onChange={this.handleChange}
            ></Autocomplete>
            </div>
        )
    }
}