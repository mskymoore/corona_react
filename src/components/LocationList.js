import React from 'react';
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';


export default function LocationList(props) {
    return(
     <List>
        {props.data.map(prop => 
            <ListItem>
                <Card style={{ width: "100%" }}>
                    <p>{prop.id}</p>
                    <Link to={'/' + prop.id}>
                    <p>{prop.friendly_name}</p>
                    </Link>
                    <p>{prop.county}</p>
                    <p>{prop.province_state}</p>
                    <p>{prop.region_country}</p>
                    <p>{prop.latitude}</p>
                    <p>{prop.longitude}</p>
                    <p>{prop.friendly_hash}</p>
                </Card>
            </ListItem>
            )
        }
      </List>
    )
}

