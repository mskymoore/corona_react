import React from 'react';
import axios from 'axios';
import Card from '@material-us/core/Card';


export default class Plot extends React.Component {
    state = {
        plot: {}
    }

    componentDidMount(){
        const plotName = this.props.match.params.plotName;
        axios.get(`http://333.isos.tech:8888/api/plot/${plotName}`)
        .then(res => {
                      this.setState({plot: res.data});
                      console.log(res.data);
                     }
             )
    }

    render(){
        return(
            <div>
                <Card style={{ width: '100%' }}>
                    {this.state.plot}
                </Card>
            </div>
        )
    }
}