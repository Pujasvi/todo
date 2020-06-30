import React from 'react';
import './App.css';
import Layout from './Components/Layout/layout';
import { Route } from 'react-router-dom';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
        <Layout style={{height:'100%'}}>
            <Route path="/" component={Login}></Route>
        </Layout>
    </div>
  );
}

export default App;
