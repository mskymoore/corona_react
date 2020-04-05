import Autocomplete from  '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';


export default function LocationAutocomplete(locations){

    return(
        <div>
            <Autocomplete
                id="combo-box-demo"
                options={locations}
                getOptionLabel={(option) => option.friendly_name}
                groupBy={(option) => option.firstLetter}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined"/>}
                onKeyUp={(locationFriendlyHash) => renderLocationPlots(locationFriendlyHash)}
            ></Autocomplete>
        </div>
    );
}