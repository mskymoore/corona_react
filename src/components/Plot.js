import React from 'react';
import Card from '@material-us/core/Card';


export default function aPlot(plot) {
    return(
        <div>
            <Card style={{ width: '100%' }}>
                {plot}
            </Card>
        </div>
    )
}