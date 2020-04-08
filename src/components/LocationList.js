import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import LocationCard from './LocationCard';


export default function LocationList(props) {
    console.log('locationlist props',props.data)
    return(
     <List>
        {props.data.map(prop => 
            <ListItem key={prop.friendly_hash}>
                <LocationCard data={prop} />
            </ListItem>
            )
        }
      </List>
    )
}

