import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';
import LocationList from './containers/LocationListView';


function App() {
  return (
    <div className="App">
        <CustomLayout>
         <LocationList />
        </CustomLayout>
    </div>
  );
}

export default App;
