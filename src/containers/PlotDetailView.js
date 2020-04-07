import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Plot from './PlotTemplate';


export default class PlotDetail extends React.Component {

    state = {
        cplot: {},
        dplot: {}
    }

    componentDidMount() {
        const locationFriendlyHash = this.props.match.params.locationFriendlyHash
        axios.get(`http://172.31.25.48:8888/api/series/?friendly_hash=${locationFriendlyHash}&case_type=confirmed`)
            .then(res => {
                this.setState({ cplot: res.data });
                console.log(res.data)
                const cplot_data = {
                    div: 'c_cases_plot',
                    data:
                    {
                        type: 'scatter',
                        name: 'confirmed cases',
                        x: this.state.cplot.x_axis,
                        y: this.state.cplot.cases,
                        xaxis: 'date',
                        yaxis: 'cases'
                    },
                    layout: 
                    {
                        title: 'Confirmed Cases vs. Date',
                        xaxis: { title: 'date' },
                        yaxis: { title: 'confirmed cases' }
                    }
                }
                Plot(cplot_data);
            }
            )
        axios.get(`http://172.31.25.48:8888/api/series/?friendly_hash=${locationFriendlyHash}&case_type=deaths`)
            .then(res => {
                this.setState({ dplot: res.data });
                console.log(res.data)
                
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