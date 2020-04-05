import React from 'react';
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default function LocationList(props) {
    return(
      props.data
     <List>
         <ListItem >
             <Card title={item.friendly_name} extra={<Link to={"/" + item.id}>Info</Link>} style={{ width: '100%' }}>
                 <p>{item.county}</p>
                 <p>{item.province_state}</p>
                 <p>{item.region_country}</p>
                 <p>{item.friendly_hash}</p>
             </Card>
         </ListItem>
      </List>
    )
}

