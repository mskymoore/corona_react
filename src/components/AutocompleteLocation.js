import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

export default function AutocompleteLocation(props){

    return(
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

    );
}
              