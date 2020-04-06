import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';


export default function PlotsList(props) {
        console.log('plotslist props',props.data);
        return(
            <List>
               {props.data.map(prop =>
                    <ListItem key={prop.name}>
                        <Card style={{ width: '100%' }}>
                        <Link to={'location/' + prop.name}>
                        <p>{prop.friendly_name}</p>
                        </Link>
                        <p>{prop.name}</p>
                        </Card>
                    </ListItem>
                    )
               }
            </List>
           )
}
    

