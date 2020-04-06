import React from 'react';
import Card from '@material-ui/core/Card';


export default class Plot extends React.Component{

    constructor(props){
        super(props);
        console.log('constructing plot')
    }
    componentDidMount(){
        console.log('plot props:', this.props)
    }

    componentDidUpdate(){
        console.log('updating plot')
    }

    render (){
    return(
        <div>
            <Card style={{ width: '100%' }}>
                <div>
                {this.props.data}
                </div>
            </Card>
        </div>
    )
    }
}