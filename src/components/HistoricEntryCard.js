import React from 'react';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import axios from 'axios';

export default class HistoricEntryCard extends React.Component {

    componentDidMount(){

        axios.get(`http://172.31.25.48:8888/api/province_state/Texas`)
        .then(res => {
            console.log('historic entry response', res.data)
        })
    }

    render() {
        return(
            <div></div>
        )
    }
}