import React from 'react';
import './App.css'

import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Sidebar />
    </div>
  );
}

export default App;
