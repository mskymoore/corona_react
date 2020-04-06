import React from 'react';
import axios from 'axios';
import PlotsList from '../components/PlotsList';



class PlotsListView extends React.Component{
    state = {
        plots: []
    }

    componentDidMount(){        
        var plotz = [];
        const locationFriendlyHash = this.props.match.params.locationFriendlyHash
        console.log(locationFriendlyHash)
        axios.get(`http://172.31.25.48:8888/api/plots_gen/?friendly_hash=${locationFriendlyHash}`)
        .then(res => {
                  console.log(res.data)
                  axios.get(`http://172.31.25.48:8888/api/plots/${locationFriendlyHash}confirmed`)
                  .then(res => {
                                plotz.push(res.data);
                                console.log('confirmed response',res.data)

                               }
                  )
                  axios.get(`http://172.31.25.48:8888/api/plots/${locationFriendlyHash}deaths`)
                  .then(res => {
                                plotz.push(res.data);
                                console.log('deaths response', res.data)
                               }
                  )
                  console.log('setting plotslistview state')
                  this.setState({plots: plotz})
                  console.log('new plots state', this.state.plots)
                 }
        )

    }
    
    render() {
        return (
            <div>
            <h1>plotslist</h1>
            <PlotsList data={this.state.plots}/>
            </div>
        )
    }
    
}

export default PlotsListView;