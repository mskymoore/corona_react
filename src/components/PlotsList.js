import React from 'react';
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Plot from './containers/PlotView';


export default function PlotsList(props) {
    return(
     <List>
        {
        props.data.map(prop => 
                  <ListItem key={prop.name}>
                      <Plot data={prop.name} />
                  </ListItem>
                  )
        }
     </List>
    )
}

