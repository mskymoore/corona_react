import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';


export default function PlotsList(props) {
        console.log('plotslist props',props.data)
        return(
            <div>
            <p>list</p>
            <List>
               {props.data.map(prop =>
                    <div>
                    <p>listitem</p>
                    <div>
                    <ListItem key={prop.name}>
                       <p>card</p>
                        <Card style={{ width: '100%' }}>
                            <p>here's a card</p>
                            <p>{prop.name}</p>
                        </Card>
                    </ListItem>
                    </div>
                    </div>
                    )
               }
            </List>
            </div>
           );
}
    

