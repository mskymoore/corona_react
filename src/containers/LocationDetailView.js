import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';

export default class LocationDetail extends React.Component {

    state = {
        location: {}
    }

    componentDidMount(){
        const locationID = this.props.match.params.locationID
        axios.get(`http://333.isos.tech:8888/api/location/${locationID}`)
        .then(res => {
                      this.setState({location: res.data});
                      console.log(res.data)

                     }
             )
    }
    
    render() {
        return (
            <div>
            <Card style={{ width: '100%' }}>
                <p>{this.state.location.county}</p>
                <p>{this.state.location.province_state}</p>
                <p>{this.state.location.region_country}</p>
                <p>{this.state.location.friendly_name}</p>
                <p>{this.state.location.friendly_hash}</p>
                <p>{this.state.location.latitude}</p>
                <p>{this.state.location.longitude}</p>
            </Card>
            </div>
        )
    }
}