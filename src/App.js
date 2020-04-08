import React from 'react';
import './App.css';
import CustomLayout from './containers/Layout';
import { Router, Route } from 'react-router-dom';
import LocationListView from './containers/LocationListView';
import PlotDetail from './containers/PlotDetailView';
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();




export default function App() {
    return (
      <div>
        <Router history={customHistory}>
          <div>
              <CustomLayout history={customHistory}></CustomLayout>
              <Route exact path='/' component={PlotDetail} />
              <Route exact path='/locations' component={LocationListView} />
              <Route exact path='/plot/:locationFriendlyHash' component={PlotDetail} />
              <Route exact path='/province_states' />
              <Route exact path='/province_state/:province_state' />
              <Route exact path='/country_regions' />
              <Route exact path='/country_region/:country_region' />
              <Route exact path='/counties' />
              <Route exact path='/county/:county' />
              <Route exact path='/historic_entries' />
              <Route exact path='/historic_entry/:historic_entryID' />
          </div>
        </Router>
      </div>
    );
}

