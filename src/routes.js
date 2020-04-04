import React from 'react';
import { Route } from 'react-router-dom';
import LocationList from './containers/LocationListView';
import LocationDetail from './containers/LocationDetailView'

const BaseRouter = () => (
        <>
        <Route exact path='/' component={LocationList}/>
        <Route exact path='/:locationID' component={LocationDetail}/>
        </>
)

export default BaseRouter;