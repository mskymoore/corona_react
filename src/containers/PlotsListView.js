import React from 'react';
import axios from 'axios';
import PlotList from '../components/PlotList';
import { TextField } from '@material-ui/core';

export default class PlotListView extends React.Component {

    state = {
        plots: []
    }

    componentDidMount(){
        const plotNames = this.props.match.params.plotNames
        axios.get(`http://333.isos.tech:8888/api/plots/${plotNames}`)
        .then(res => {
                      this.setState({plots: res.data});
                      console.log(res.data);

                     }
             )
    }

    render() {
        return (
            <div>
            <PlotList data={this.state.plots}/>
            </div>
        )
    }
}