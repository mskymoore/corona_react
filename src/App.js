import React from 'react';
import BaseRouter from './routes';
import BrowserRouter from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';


function App() {
  return (
    <div className="App">
        <CustomLayout>
        <BrowserRouter><BaseRouter /></BrowserRouter>
        </CustomLayout>
    </div>
  );
}

export default App;
