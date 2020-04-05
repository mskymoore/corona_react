import React from 'react';
import PlotsListView from './PlotsListView';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

export default class CustomLayout extends React.Component {
  state = {
    location: {},
    locations: {}
  }

  

  componentDidMount(){
    if (this.props.locationFriendlyHash){
        const locationFriendlyHash = this.props.match.params.locationFriendlyHash
        axios.get(`http://333.isos.tech:8888/api/location/${locationFriendlyHash}`)
        .then(res => {
                      this.setState({location: res.data});
                      console.log(res.data)

                     }
             );
    }
    
    axios.get(`http://localhost:8888/api/locations`)
    .then(res => {
                  this.setState({locations: res.data});
                  console.log(res.data)
     
                 }
         );
  }

  handleChange = location =>{
    this.setState({location})
  }

  render(){
      return (
        <div>
            <div>
                <Autocomplete
                  id="combo-box-demo"
                  options={this.state.locations}
                  getOptionLabel={(option) => option.friendly_name}
                  groupBy={(option) => option.firstLetter}
                  style={{ width: 300 }}
                  value={this.state.location}
                  renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined"/>}
                  onChange={this.handleChange}
                ></Autocomplete>
            </div>
            <PlotsListView data={this.state.location} />
        </div>
      );
  }
  
}

