import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import TitleBar from '../components/TitleBar';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));


export default function CustomLayout(props) {
  const classes = useStyles();
  console.log('customlayout props',props)
  //return (
  //  <div className={classes.root} >
  //          <TitleBar />
  //          {props.children}
  //          
  //  </div>
  //);
  return (
    <div className={classes.root} >
            {props.children}
            
    </div>
  );
}

