import React from 'react';
import PlotsListView from './PlotsListView';
import LocationAutocomplete from '../components/LocationAutocomplete';



export default class CustomLayout extends React.Component {
  state = {
    location: {},
    locations: {}
  }

  

  componentDidMount(){
    
    if (this.props.match.params.locationFriendlyHash){
        const locationFriendlyHash = this.props.match.params.locationFriendlyHash
        axios.get(`http://333.isos.tech:8888/api/location/${locationFriendlyHash}`)
        .then(res => {
                      this.setState({location: res.data});
                      console.log(res.data)

                     }
             );
    }
    
    axios.get(`http://333.isos.tech:8888/api/locations`)
    .then(res => {
                  this.setState({locations: res.data});
                  console.log(res.data)
     
                 }
         );
  }

  render(){
      return (
        <div className={classes.root}>
                <LocationAutocomplete id='autocomplete' data={this.state.locations} />
                <PlotsListView data={this.state.location} />
                
        </div>
      );
  }
  
}

