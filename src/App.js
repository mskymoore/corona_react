import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';


function App() {
  return (
    <div className="App">
        <CustomLayout>
         <BaseRouter />
        </CustomLayout>
    </div>
  );
}

export default App;
