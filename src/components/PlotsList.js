import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Plot from './Plot';


export default function PlotsList(props) {
    console.log('propslist') 
    console.log(props)
    return(
     <div>
     <List>
        {
        props.data.map(prop => 
                  <ListItem key={prop.name}>
                      <Plot data={prop.plot} />
                  </ListItem>
                  )
        }
     </List>
     </div>
    )
}

