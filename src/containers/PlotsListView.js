import React, { useState } from 'react';
import axios from 'axios';
import PlotsList from '../components/PlotsList';



export default function PlotsListView(location) {
    const [plots, setPlots] = useState([]);
    console.log(location.data)
    axios.get(`http://172.31.25.48:8888/api/plots_gen/?friendly_hash=${location.data}`)
    .then(res => {
                  console.log(res.data)
                  axios.get(`http://172.31.25.48:8888/api/plots/${location.data}confirmed`)
                  .then(res => {
                                setPlots(res.data)
                                console.log(res.data);

                               }
                  )
    )

    

    return (
        <div>
        <PlotsList data={plots}/>
        </div>
    )
}