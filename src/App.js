import React from 'react';
import './App.css';
import CustomLayout from './containers/Layout';
import { BrowserRouter, Route } from 'react-router-dom';
import LocationListView from './containers/LocationListView';
import LocationDetail from './containers/LocationDetailView';
import Plot from './containers/PlotView';
import PlotsListView from './contianers/PlotsListView';



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
            <CustomLayout></CustomLayout>
            <Route exact path='/' component={CustomLayout}/>
            <Route exact path='/location/:locationFriendlyHash' component={CustomLayout}/>
            <Route exact path='/province_states' />
            <Route exact path='/province_state/:province_state' />
            <Route exact path='/country_regions' />
            <Route exact path='/country_region/:country_region' />
            <Route exact path='/counties' />
            <Route exact path='/county/:county' />
            <Route exact path='/historic_entries' />
            <Route exact path='/historic_entry/:historic_entryID' />
            <Route exact path='/plot/:plotName' component={Plot} />
            <Route exact path='/plots/:plotNames' component={PlotsListView} />
        </div>
      </BrowserRouter>
    </div>
  );
}
