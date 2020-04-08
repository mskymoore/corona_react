import React from 'react';
import Plots from '../components/PlotTemplate';
import PlotContainer from './PlotsContainer';


export default class PlotDetail extends React.Component {

    handleDetailChange = (props) => {
        const locationFriendlyHash = this.props.match.params.locationFriendlyHash;
        Plots({locationFriendlyHash: locationFriendlyHash})
    }

    getSnapshotBeforeUpdate(prevProps) {
        return { updateRequired: prevProps.match.params.locationFriendlyHash !== this.props.match.params.locationFriendlyHash };
      }

    componentDidMount() {
        if(this.props.match.params.locationFriendlyHash){
            this.handleDetailChange({update: false})
        }
    }

    componentDidUpdate(PrevProps, PrevState, snapshot){
        if (snapshot.updateRequired){
            this.handleDetailChange({update: true})
        }
    }

    render() {
        return (
            <div>
                <PlotContainer />
            </div>

        )
    }
}