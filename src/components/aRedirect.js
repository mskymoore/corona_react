import { useHistory } from 'react-router-dom';


export default function HandleChange(event, value){
    let history = useHistory();
    history.push(`/location/${value.friendly_hash}`);
}