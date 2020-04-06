import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';

export default class PlotDetail extends React.Component {

    state = {
        plot: {}
    }

    componentDidMount(){
        const locationFriendlyHash = this.props.match.params.locationFriendlyHash
        axios.get(`http://172.31.25.48:8888/api/plot/${locationFriendlyHash}confirmed`)
        .then(res => {
                      this.setState({plot: res.data});
                      console.log(res.data)

                     }
             )
    }
    
    render() {
        return (
            <div>
            <Card style={{ width: '100%' }}>
                <p>{this.state.plot.name}</p>
            </Card>
            </div>
        )
    }
}