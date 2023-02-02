import React from 'react';
import './App.css'
import { Router, Route } from 'react-router-dom';

import Sidebar from './components/navbar/sidebar/Sidebar'
import Topbar from './components/navbar/topbar/Topbar'
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={"/"} element={<Login />} />
        <Route exact path={"/app"} element={[<Topbar />, <Sidebar />, <Dashboard />]} />
      </Router>
    </div>
  );
}
export default App;
