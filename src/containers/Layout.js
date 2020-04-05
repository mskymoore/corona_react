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
        axios.get(`http://172.31.25.48:8888/api/location/${locationFriendlyHash}`)
        .then(res => {
                      this.setState({location: res.data});
                      console.log(res.data)

                     }
             );
    }
    
    axios.get(`http://172.31.25.48:8888/api/locations`)
    .then(res => {
                  this.setState({locations: res.data});
                  console.log(res.data)
     
                 }
         );
  }

  handleChange = (event, value) =>{
    console.log('setting state')
    this.setState({location: value})
  }

  render(){
      return (
        <div>
            <div>
                <Autocomplete
                  options={this.state.locations}
                  getOptionLabel={(option) => option.friendly_name}
                  groupBy={(option) => option.firstLetter}
                  style={{ width: 300 }}
                  value={this.state.location.friendly_name}
                  renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined"/>}
                  onChange={this.handleChange}
                ></Autocomplete>
            </div>
            <PlotsListView data={this.state.location.friendly_hash} />
        </div>
      );
  }
  
}

