import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container'
import Plotly from 'plotly.js';



export default class PlotDetail extends React.Component {

    state = {
        cplot: {},
        dplot: {}
    }

    componentDidMount(){
        const locationFriendlyHash = this.props.match.params.locationFriendlyHash
        axios.get(`http://172.31.25.48:8888/api/series/?friendly_hash=${locationFriendlyHash}&case_type=confirmed`)
        .then(res => {
                      this.setState({cplot: res.data});
                      console.log(res.data)
                      Plotly.newPlot('c_cases_plot',[
                        {
                            type: 'line',
                            x: this.state.cplot.x_axis,
                            y: this.state.cplot.cases,
                        }
                      ])
                      Plotly.newPlot('c_perc_growth_plot',[
                        {
                            type: 'bar',
                            x: this.state.cplot.x_axis,
                            y: this.state.cplot.percent_growth,
                        }
                      ])
                      Plotly.newPlot('c_growth_plot',[
                        {
                            type: 'bar',
                            x: this.state.cplot.x_axis,
                            y: this.state.cplot.growth,
                        }
                      ])
                     }
             )
        axios.get(`http://172.31.25.48:8888/api/series/?friendly_hash=${locationFriendlyHash}&case_type=deaths`)
        .then(res => {
                      this.setState({dplot: res.data});
                      console.log(res.data)
                      Plotly.newPlot('d_cases_plot',[
                        {
                            type: 'line',
                            x: this.state.dplot.x_axis,
                            y: this.state.dplot.cases,
                        }
                      ])
                      Plotly.newPlot('d_perc_growth_plot',[
                        {
                            type: 'bar',
                            x: this.state.dplot.x_axis,
                            y: this.state.dplot.percent_growth,
                        }
                    ])
                        Plotly.newPlot('d_growth_plot',[
                        {
                            type: 'bar',
                            x: this.state.dplot.x_axis,
                            y: this.state.dplot.growth,
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
                    <div id='c_cases_plot'>
                    </div>
                </Container>
            </Card>
            <Card style={{ width: '100%' }}>
                <Container>
                    <div id='c_perc_growth_plot'>
                    </div>
                </Container>
            </Card>
            <Card style={{ width: '100%' }}>
                <Container>
                    <div id='c_growth_plot'>
                    </div>
                </Container>
            </Card>
            <Card style={{ width: '100%' }}>
                <Container>
                    <div id='d_cases_plot'>
                    </div>
                </Container>
            </Card>
            <Card style={{ width: '100%' }}>
                <Container>
                    <div id='d_perc_growth_plot'>
                    </div>
                </Container>
            </Card>
            <Card style={{ width: '100%' }}>
                <Container>
                    <div id='d_growth_plot'>
                    </div>
                </Container>
            </Card>
            </div>
            
        )
    }
}