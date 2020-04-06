import React from 'react';
import './App.css';
import CustomLayout from './containers/Layout';
import { BrowserRouter, Route } from 'react-router-dom';
import PlotsListView from './containers/PlotsListView';
import LocationListView from './containers/LocationListView';
import LocationDetail from './containers/LocationDetailView';



export default function App() {
    return (
      <div>
        <BrowserRouter>
          <div>
              <CustomLayout></CustomLayout>
              <Route exact path='/'/>
              <Route exact path='/locations' component={LocationListView} />
              <Route exact path='/location/:locationFriendlyHash' component={LocationDetail} />
              <Route exact path='/plots/:locationFriendlyHash' component={PlotsListView} />
              <Route exact path='/province_states' />
              <Route exact path='/province_state/:province_state' />
              <Route exact path='/country_regions' />
              <Route exact path='/country_region/:country_region' />
              <Route exact path='/counties' />
              <Route exact path='/county/:county' />
              <Route exact path='/historic_entries' />
              <Route exact path='/historic_entry/:historic_entryID' />
          </div>
        </BrowserRouter>
      </div>
    );
}

