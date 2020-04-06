import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container'

import Plotly from 'plotly.js';


export default class PlotDetail extends React.Component {

    state = {
        plot: {}
    }

    componentDidMount(){
        const locationFriendlyHash = this.props.match.params.locationFriendlyHash
        axios.get(`http://172.31.25.48:8888/api/series/?friendly_hash=${locationFriendlyHash}&case_type=confirmed`)
        .then(res => {
                      this.setState({plot: res.data});
                      console.log(res.data)
                      Plotly.newPlot('aplot',[
                        {
                            type: 'line',
                            x: this.state.plot.x_axis,
                            y: this.state.plot.cases,
                        }
                    ])
                     }
             )
    }
    
    render() {

        return (
            <div>
            <Card style={{ width: '100%' }}>
                <Container>
                    <div id='aplot'></div>
                </Container>
                <Container >
                    <p>{this.state.plot.x_axis}</p>
                </Container>
                
            </Card>
            </div>
            
        )
    }
}