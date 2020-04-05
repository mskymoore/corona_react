import React, { useState } from 'react';
import axios from 'axios';
import PlotsList from '../components/PlotsList';



export default function PlotsListView(location) {
    const [plots, setPlots] = useState([]);

    axios.get(`http://333.isos.tech:8888/api/plots_gen/?friendly_hash=${location.friendly_hash}`)
    .then(res => {
                  console.log(res.data)
                  axios.get(`http://333.isos.tech:8888/api/plots/${location.friendly_hash}`)
                  .then(res => {
                                setPlots(res.data)
                                console.log(res.data);

                               }
                  )
                 }
    )

    

    return (
        <div>
        <PlotsList data={plots}/>
        </div>
    )
}