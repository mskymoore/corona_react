import React from 'react';
import './App.css';
import CustomLayout from './containers/Layout';
import { BrowserRouter, Route } from 'react-router-dom';
import LocationListView from './containers/LocationListView';
import LocationDetail from './containers/LocationDetailView';



function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
      <CustomLayout></CustomLayout>
      <Route exact path='/' component={LocationListView}/>
      <Route exact path='/location/:locationID' component={LocationDetail}/>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
