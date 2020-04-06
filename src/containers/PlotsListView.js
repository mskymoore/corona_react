import React from 'react';
import axios from 'axios';
import PlotsList from '../components/PlotsList';



class PlotsListView extends React.Component{
    state = {
        plots: []
    }

    constructor(props){
        super(props);
        console.log('constructing plotslistview')
    }

    componentDidMount(){
        console.log('mounting plotslistview')
        console.log(this.props.data)
        var plotz = [];
        axios.get(`http://172.31.25.48:8888/api/plots_gen/?friendly_hash=${this.props.data}`)
        .then(res => {
                  console.log(res.data)
                  axios.get(`http://172.31.25.48:8888/api/plots/${this.props.data}confirmed`)
                  .then(res => {
                                plotz.push(res.data);

                               }
                  )
                  axios.get(`http://172.31.25.48:8888/api/plots/${this.props.data}deaths`)
                  .then(res => {
                                plotz.push(res.data);

                               }
                  )
                  console.log('setting plotslistview state')
                  this.setState({plots: plotz})
                 }
        )

    }
    
    render() {
        return (
            <div>
            <p>plotslist</p>
            <PlotsList data={this.state.plots}/>
            </div>
        )
    }
    
}

export default PlotsListView;