import React from 'react';
import './App.css'

import Sidebar from './components/navbar/sidebar/Sidebar'

import Topbar from './components/navbar/topbar/Topbar'

import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
