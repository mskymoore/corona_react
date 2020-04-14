import React from 'react';
import Plots from '../components/PlotTemplate';
import Card from '@material-ui/core/Card';
import Fade from '@material-ui/core/Fade';
import Container from '@material-ui/core/Container';
import axios from 'axios';



const api = axios.create({
    baseURL: 'https://333.isos.tech/api/'
})

export default class PlotDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            div_plots: [],
            template_plots: [],
            plots: {
                    confirmed: ['c_cases_plot', 'c_perc_growth_plot', 'c_growth_plot'],
                    deaths: ['d_cases_plot', 'd_perc_growth_plot', 'd_growth_plot'],
                    recovered: ['r_cases_plot', 'r_perc_growth_plot', 'r_growth_plot']
                   },
            hash: ''
        }
        api.get(`location/${this.props.match.params.locationFriendlyHash}`)
            .then(res => {
                var plot_divs = []
                var plot_templates = []
                res.data.case_types.map(case_type => {
                    var case_plot_divs = []
                    this.state.plots[case_type].map(plot_div => {
                        plot_divs.push(plot_div)
                        case_plot_divs.push(plot_div)
                        return true
                    });
                    plot_templates.push({
                        location: res.data.friendly_name,
                        case_type: case_type,
                        hash: this.props.match.params.locationFriendlyHash,
                        divs: case_plot_divs
                    })
                    return true
                });
                this.setState({
                    div_plots: plot_divs,
                    template_plots: plot_templates,
                    hash: this.props.match.params.locationFriendlyHash
                })
                Plots(this.state.template_plots)
            });
    }


    getSnapshotBeforeUpdate(prevProps, prevState){
        if (prevState.hash !== this.state.hash){
            return true
        }
        else if (prevProps.match.params.locationFriendlyHash !== this.props.match.params.locationFriendlyHash){
            return true
        }
        else {
            return false
        }
    }   

    componentDidMount(){

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('snapshot snapshot', snapshot)
        if (snapshot){
            api.get(`location/${this.props.match.params.locationFriendlyHash}`)
            .then(res => {
                var plot_divs = []
                var plot_templates = []
                res.data.case_types.map(case_type => {
                    var case_plot_divs = []
                    this.state.plots[case_type].map(plot_div => {
                        plot_divs.push(plot_div)
                        case_plot_divs.push(plot_div)
                        return true
                    });
                    plot_templates.push({
                        location: res.data.friendly_name,
                        case_type: case_type,
                        hash: this.props.match.params.locationFriendlyHash,
                        divs: case_plot_divs
                    })
                    return true
                });
                this.setState({
                    div_plots: plot_divs,
                    template_plots: plot_templates,
                    hash: this.props.match.params.locationFriendlyHash
                })
            });
            Plots(this.state.template_plots)
        }
    }

    render() {
        return (
            <div>
                <Container >
                    {this.state.div_plots.map(plot =>
                        <Fade in={true} timeout={5000} key={plot}>
                            <Card style={{ width: '100%', backgroundColor: 'DimGrey', margin: '11px 10px 11px 0px' }}>
                                <Container>
                                    <Fade in={true} timeout={5000}>
                                        <div id={plot} style={{ margin: '15px 0px 15px' }}>
                                        </div>
                                    </Fade>
                                </Container>
                            </Card >
                        </Fade>
                    )}
                </Container>
            </div>

        )
    }
}