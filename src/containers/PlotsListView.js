import React from 'react';
import axios from 'axios';
import PlotsList from '../components/PlotsList';

export default class PlotsListView extends React.Component {

    state = {
        plots: []
    }
    
    componentDidMount(){
        if (this.props.match.params.plotNames){
            const plotNames = this.props.match.params.plotNames
            axios.get(`http://333.isos.tech:8888/api/plots/${plotNames}`)
            .then(res => {
                          this.setState({plots: res.data});
                          console.log(res.data);

                         }
                 )
        }
    }

    render() {
        return (
            <div>
            <PlotsList data={this.state.plots}/>
            </div>
        )
    }
}