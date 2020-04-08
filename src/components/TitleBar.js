import React from 'react';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



class TitleBar extends React.Component {
    state = {
        locations: []
    }

    componentDidMount(){
        axios.get(`http://172.31.25.48:8888/api/locations`)
        .then(res => {
                  this.setState({locations: res.data});
                  console.log(res.data)
                 }
         );
    }

    handleChange = (event, value) => {
        if (value){
            this.setState({location: value}) 
            this.props.history.push(`/plot/${value.friendly_hash}`)
        }
    }

    home = () => {
        this.props.history.push("/")
    }

    render(){
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" onClick={this.home}>
                            <MenuIcon />
                        </IconButton>
                        <Autocomplete
                            options={this.state.locations}
                            getOptionLabel={(option) => option.friendly_name}
                            groupBy={(option) => option.firstLetter}
                            style={{ width: 300 }}
                            value={this.state.location}
                            renderInput={(params) => <TextField {...params} label="Locations" variant="outlined" />}
                            onChange={this.handleChange}
                        ></Autocomplete>
                        <div><h2>Covid 19 Plots</h2></div>
                    </Toolbar>
                </AppBar>
            
            </div>
        )
    }
}

export default withRouter(TitleBar)