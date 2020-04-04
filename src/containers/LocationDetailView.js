import React from 'react';
import axios from 'axios';
import { Card } from 'antd';


class LocationDetail extends React.Component {

    state = {
        location: {}
    }

    componentDidMount(){
        const locationID = this.props.match.params.locationID
        axios.get(`http://333.isos.tech:8888/api/${locationID}`)
        .then(res => {
            this.setState({
                location: res.data
            });
            console.log(res.data)

        }
            )
    }
    render() {
        return (
            <Card title={this.state.location.friendly_name} extra={<a href="/">Info</a>} style={{ width: '100%' }}>
                <p>{this.state.location.county}</p>
                <p>{this.state.location.province_state}</p>
                <p>{this.state.location.region_country}</p>
                <p>{this.state.location.friendly_hash}</p>
            </Card>
        )
    }
}

export default LocationDetail;