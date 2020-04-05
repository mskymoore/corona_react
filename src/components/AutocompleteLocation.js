import React, { useState } from 'react';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

export default function AutocompleteLocation() {
    const [locations, setLocations] = useState([]);
    const [location, setLocation] = useState('');
  
  
      axios.get(`http://localhost:8888/api/locations`)
      .then(res => {
                    setLocations(res.data);
                    console.log(res.data)
       
                   }
           );
  
  
        return (
          <div>
              <div>
                  <Autocomplete
                    id="combo-box-demo"
                    options={locations}
                    getOptionLabel={(option) => option.friendly_name}
                    groupBy={(option) => option.firstLetter}
                    style={{ width: 300 }}
                    value={location}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined"/>}
                  ></Autocomplete>
              </div>
          </div>
        );
    
  }
  