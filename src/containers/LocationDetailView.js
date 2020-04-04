import React from 'react';
import axios from 'axios';
import Location from '../components/Location';


class LocationDetail extends React.Component {

    state = {
        locations: []
    }

    componentDidMount(){
        axios.get('http://333.isos.tech:8888/api/')
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
                <Location data={this.state.locations}/>
        )
    }
}

export default LocationDetail;