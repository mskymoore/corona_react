import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Plot from './PlotTemplate';
import AutoCompleteView from './AutocompleteView';


export default class PlotDetail extends React.Component {

    state = {
        cplot: {},
        dplot: {},
        location: {}
    }

    componentDidMount() {
        const locationFriendlyHash = this.props.match.params.locationFriendlyHash
        axios.get(`http://172.31.25.48:8888/api/series/?friendly_hash=${locationFriendlyHash}&case_type=confirmed`)
            .then(res => {
                this.setState({ cplot: res.data });
                console.log(res.data)

                const cases_plot_data = {
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
                Plot(cases_plot_data);
                
                const percent_growth_plot_data = {
                    div: 'c_perc_growth_plot',
                    data:
                    {
                        type: 'bar',
                        name: 'percent growth',
                        x: this.state.cplot.x_axis,
                        y: this.state.cplot.percent_growth,
                        xaxis: 'date',
                        yaxis: '%'
                    },
                    layout: 
                    {
                        title: 'Confirmed Cases Percent Growth vs. Date',
                        xaxis: { title: 'date' },
                        yaxis: { title: '%' }
                    }
                }
                Plot(percent_growth_plot_data);
                
                const cases_growth_plot_data = {
                    div: 'c_growth_plot',
                    data:
                    {
                        type: 'bar',
                        name: 'cases growth',
                        x: this.state.cplot.x_axis,
                        y: this.state.cplot.growth,
                        xaxis: 'date',
                        yaxis: 'cases'
                    },
                    layout: 
                    {
                        title: 'Confirmed Cases Growth vs. Date',
                        xaxis: { title: 'date' },
                        yaxis: { title: 'confirmed cases' }
                    }
                }
                Plot(cases_growth_plot_data);

            }
            )
        axios.get(`http://172.31.25.48:8888/api/series/?friendly_hash=${locationFriendlyHash}&case_type=deaths`)
            .then(res => {
                this.setState({ dplot: res.data });
                console.log(res.data)

                const deaths_plot_data = {
                    div: 'd_cases_plot',
                    data:
                    {
                        type: 'scatter',
                        name: 'deaths',
                        x: this.state.dplot.x_axis,
                        y: this.state.dplot.cases,
                        xaxis: 'date',
                        yaxis: 'deaths'
                    },
                    layout: 
                    {
                        title: 'Deaths vs. Date',
                        xaxis: { title: 'date' },
                        yaxis: { title: 'deaths' }
                    }
                }
                Plot(deaths_plot_data);


                const deaths_percent_growth_plot_data = {
                    div: 'd_perc_growth_plot',
                    data:
                    {
                        type: 'bar',
                        name: 'deaths percent growth',
                        x: this.state.dplot.x_axis,
                        y: this.state.dplot.percent_growth,
                        xaxis: 'date',
                        yaxis: 'percent growth'
                    },
                    layout: 
                    {
                        title: 'Deaths Percent Growth vs. Date',
                        xaxis: { title: 'date' },
                        yaxis: { title: '%' }
                    }
                }
                Plot(deaths_percent_growth_plot_data);


                const deaths_growth_plot_data = {
                    div: 'd_growth_plot',
                    data:
                    {
                        type: 'bar',
                        name: 'deaths growth',
                        x: this.state.dplot.x_axis,
                        y: this.state.dplot.growth,
                        xaxis: 'date',
                        yaxis: 'deaths growth'
                    },
                    layout: 
                    {
                        title: 'Deaths Growth vs. Date',
                        xaxis: { title: 'date' },
                        yaxis: { title: 'deaths growth' }
                    }
                }
                Plot(deaths_growth_plot_data);
                
            }
            )
    }

    componentDidUpdate(){

    }

    render() {

        return (
            <div>
                <AutoCompleteView/>
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