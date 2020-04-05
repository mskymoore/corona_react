import React from 'react';
import './App.css';
import CustomLayout from './containers/Layout';
import { BrowserRouter, Route } from 'react-router-dom';
import LocationListView from './containers/LocationListView';
import LocationDetail from './containers/LocationDetailView';
import Plot from './containers/PlotView';
import PlotsListView from './contianers/PlotsListView';



function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
            <CustomLayout></CustomLayout>
            <Route exact path='/' component={LocationListView}/>
            <Route exact path='/location/:locationID' component={LocationDetail}/>
            <Route exact path='/province_states' />
            <Route exact path='/provine_state/:province_stateID' />
            <Route exact path='/country_regions' />
            <Route exact path='/country_region/:country_regionID' />
            <Route exact path='/counties' />
            <Route exact path='/county/:countyID' />
            <Route exact path='/historic_entries' />
            <Route exact path='/historic_entry/:historic_entryID' />
            <Route exact path='/plot/:plotName' component={Plot} />
            <Route exact path='/plot/:plotNames' component={PlotsListView} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
