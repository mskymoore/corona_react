import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LocationList from './containers/LocationListView';
import LocationDetail from './containers/LocationDetailView'

const BaseRouter = () => (
        <BrowserRouter>
            <Route exact path='/' component={LocationList}/>
            <Route exact path='/:friendly_name' component={LocationDetail}/>
        </BrowserRouter>
)

export default BaseRouter;