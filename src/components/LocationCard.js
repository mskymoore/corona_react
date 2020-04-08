import React from 'react';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';

export default class LocationCard extends React.Component {

    
    render() {
        return (
            <div>
            <Card style={{ width: '100%' }}>
                <Link to={'location/' + this.props.friendly_hash}>
                    <p>{this.props.friendly_name}</p>
                </Link>
                <p>county: {this.props.county}</p>
                <p>province/state: {this.props.province_state}</p>
                <p>region/country: {this.props.region_country}</p>
                <p>latitude: {this.props.latitude}</p>
                <p>longitude: {this.props.longitude}</p>
                <p>sha256: {this.props.friendly_hash}</p>
            </Card>
            </div>
        )
    }
}