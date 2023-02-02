import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/navbar/sidebar/Sidebar'
import Topbar from './components/navbar/topbar/Topbar'
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/app" element={[<Topbar />, <Sidebar />, <Dashboard />]} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;
