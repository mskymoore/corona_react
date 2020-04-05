import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Autocomplete from  '@material-ui/lab/Autocomplete';
import axios from 'axios';


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

async function get_data(){
  const response = await axios.get('http://333.isos.tech:8888/api/locations');
  console.log(response.data);
  return (response.data);
}

export default function CustomLayout(props) {
  const classes = useStyles();
  var data = [];
  var resdata = get_data();
  resdata.forEach(data.push)


  return (
    <div className={classes.root}>
      <Autocomplete
        id="combo-box-demo"
        options={data}
        getOptionLabel={(option) => option.friendly_name}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
      ></Autocomplete>
            {props.children}
    </div>
  );
  
}

